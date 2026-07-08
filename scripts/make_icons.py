#!/usr/bin/env python3
"""Generate SAT Quest PWA icons with the Python standard library only.
Draws a dark arcane background with a glowing golden sword crest.
Outputs icon-192.png, icon-512.png, and icon-maskable-512.png."""
import math, os, struct, zlib

OUT = os.path.join(os.path.dirname(__file__), "..", "icons")
os.makedirs(OUT, exist_ok=True)

def lerp(a, b, t): return a + (b - a) * t
def clamp(x): return max(0, min(255, int(round(x))))

def draw(size, maskable=False):
    # framebuffer RGBA
    px = bytearray(size * size * 4)
    cx = cy = size / 2
    # padding for maskable safe zone
    pad = size * 0.10 if maskable else 0

    for y in range(size):
        for x in range(size):
            # radial dark-purple gradient background
            dx, dy = (x - cx) / size, (y - cy) / size
            r = math.sqrt(dx * dx + dy * dy)
            t = min(1.0, r / 0.72)
            br = lerp(0x2a, 0x0b, t); bg = lerp(0x1a, 0x08, t); bb = lerp(0x4a, 0x12, t)

            R, G, B = br, bg, bb

            # position relative to center, normalized to [-1,1]
            nx = (x - cx) / (size / 2)
            ny = (y - cy) / (size / 2)
            scale = 1.0 - (2 * pad / size)
            nx /= scale; ny /= scale

            gold = None  # (intensity)
            # Blade points UP (toward -ny). Layout top->bottom:
            #   tip (triangle) -> blade (rect) -> crossguard -> handle -> pommel
            blade_w = 0.085
            # --- Blade tip: triangle narrowing toward the top ---
            if -0.66 <= ny <= -0.48 and abs(nx) <= blade_w * (ny + 0.66) / 0.18:
                gold = 1.0
            # --- Blade body: rectangle ---
            if -0.48 <= ny <= 0.28 and abs(nx) <= blade_w:
                gold = 1.0
            # --- Crossguard: horizontal bar below the blade ---
            if 0.28 <= ny <= 0.39 and abs(nx) <= 0.34:
                gold = 1.0
            # --- Handle ---
            if 0.39 <= ny <= 0.58 and abs(nx) <= 0.055:
                gold = 0.85
            # --- Pommel ---
            if math.sqrt(nx * nx + (ny - 0.62) ** 2) <= 0.075:
                gold = 0.9

            # glow ring around crest
            ring = math.sqrt(nx * nx + ny * ny)
            if gold is None and 0.80 <= ring <= 0.92:
                glow = 1 - abs(ring - 0.86) / 0.06
                R = lerp(R, 0xe8, glow * 0.5)
                G = lerp(G, 0xc0, glow * 0.5)
                B = lerp(B, 0x6a, glow * 0.35)

            if gold is not None:
                # gold gradient top->bottom
                gg = (ny + 0.66) / 1.28
                gr = lerp(0xff, 0xd9, gg) * gold + (1 - gold) * R
                gb = lerp(0xd9, 0x8a, gg) * gold + (1 - gold) * G
                gbl = lerp(0x8a, 0x3a, gg) * gold + (1 - gold) * B
                R, G, B = gr, gb, gbl

            i = (y * size + x) * 4
            px[i] = clamp(R); px[i+1] = clamp(G); px[i+2] = clamp(B); px[i+3] = 255
    return bytes(px)

def write_png(path, size, rgba):
    def chunk(typ, data):
        c = struct.pack(">I", len(data)) + typ + data
        return c + struct.pack(">I", zlib.crc32(typ + data) & 0xffffffff)
    sig = b"\x89PNG\r\n\x1a\n"
    ihdr = struct.pack(">IIBBBBB", size, size, 8, 6, 0, 0, 0)
    raw = bytearray()
    stride = size * 4
    for y in range(size):
        raw.append(0)  # filter type 0
        raw.extend(rgba[y*stride:(y+1)*stride])
    idat = zlib.compress(bytes(raw), 9)
    with open(path, "wb") as f:
        f.write(sig + chunk(b"IHDR", ihdr) + chunk(b"IDAT", idat) + chunk(b"IEND", b""))
    print("wrote", path)

write_png(os.path.join(OUT, "icon-192.png"), 192, draw(192))
write_png(os.path.join(OUT, "icon-512.png"), 512, draw(512))
write_png(os.path.join(OUT, "icon-maskable-512.png"), 512, draw(512, maskable=True))
print("done")
