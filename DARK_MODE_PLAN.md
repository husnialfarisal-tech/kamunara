# Rencana Implementasi Dark/Light Mode - Kamunara

## Informasi yang Dikumpulkan

### Setup yang Sudah Ada:
- ✅ **next-themes** sudah terinstall dan dikonfigurasi
- ✅ **ThemeProvider** sudah ada di layout.tsx  
- ✅ **CSS custom properties** untuk dark mode sudah didefinisikan di globals.css
- ✅ **ThemeToggle** komponen sudah ada dan berfungsi
- ✅ **Navbar** sudah ada toggle theme

### Masalah yang Ditemukan:
- ❌ Banyak komponen masih menggunakan warna statis (stone-900, text-white, bg-stone)
- ❌ Tidak mengikuti sistem theme (bg-background, text-foreground)
- ❌ Landing page (page.tsx) masih menggunakan warna hardcoded
- ❌ Beberapa komponen belum responsive terhadap theme changes

## Plan Implementasi

### 1. Update Landing Page (src/app/page.tsx)
**File yang akan diedit:** `src/app/page.tsx`
**Perubahan:**
- Ganti `bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900` → `bg-background`
- Ganti `text-white` → `text-foreground`  
- Ganti `text-stone-300` → `text-muted-foreground`
- Update background gradient untuk mendukung both themes
- Pastikan animasi particles tetap bekerja di dark/light mode

### 2. Update Komponen Navbar (src/components/Navbar.tsx)
**File yang akan diedit:** `src/components/Navbar.tsx`
**Perubahan:**
- Update navbar background dari `bg-stone-900/80` → `bg-background/80 dark:bg-background/80`
- Ganti text colors yang statis
- Pastikan mobile menu background proper di kedua mode

### 3. Update Footer (src/components/Footer.tsx)
**File yang akan diedit:** `src/components/Footer.tsx`
**Perubahan:**
- Update background dari `bg-stone-900` → `bg-background dark:bg-background`
- Ganti text colors yang statis

### 4. Update CTA Component (src/components/CTA.tsx)
**File yang akan diedit:** `src/components/CTA.tsx`
**Perubahan:**
- Update text color dari `text-stone-900` → `text-foreground`
- Update button styling untuk dark mode compatibility

### 5. Update GIS Map (src/components/GISMap.tsx)
**File yang akan diedit:** `src/components/GISMap.tsx`
**Perubahan:**
- Update map container colors
- Ganti warna statis dengan theme-aware colors

### 6. Perbaikan CSS Global (src/app/globals.css)
**File yang akan diedit:** `src/app/globals.css`
**Perubahan:**
- Tambahkan theme-aware styles untuk Leaflet map
- Update global color scheme

### 7. Update Halaman Lainnya
**Files yang akan diedit:**
- `src/app/home/page.tsx`
- `src/app/produk/page.tsx` 
- `src/app/kontak/page.tsx`
- `src/app/tentang/page.tsx`

**Perubahan umum:**
- Ganti semua warna statis dengan theme-aware colors
- Update backgrounds, text colors, borders

### 8. Testing & Validasi
**Langkah akhir:**
- Test switching dark/light mode di semua halaman
- Pastikan tidak ada warna yang conflict
- Validasi accessibility di kedua mode

## Warna yang Akan Digunakan

### Untuk Background:
- `bg-background` - Background utama
- `bg-card` - Card backgrounds
- `bg-muted` - Background muted areas

### Untuk Text:
- `text-foreground` - Text utama
- `text-muted-foreground` - Text sekunder
- `text-primary` - Text accent

### Untuk Borders:
- `border-border` - Border standar
- `border-primary` - Border accent

### Untuk Interactive Elements:
- `hover:bg-accent` - Hover states
- `focus:ring-ring` - Focus states

## Hasil yang Diharapkan
- ✅ Dark/Light mode berfungsi sempurna di semua halaman
- ✅ Smooth transition antar mode
- ✅ Konsistensi warna di seluruh aplikasi
- ✅ Accessibility yang baik di kedua mode
- ✅ Performance yang optimal
