'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Users, 
  Award, 
  Building,
  Globe,
  Utensils,
  Bed,
  Coffee,
  Star,
  CheckCircle,
  ArrowRight,
  Menu,
  X
} from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const trainingPrograms = [
    {
      title: "Front Office Department",
      description: "Pelatihan pelayanan tamu, check-in/check-out, reservasi, dan customer service",
      icon: <Building className="w-8 h-8" />,
      features: ["Receptionist", "Guest Relations", "Reservation", "Bell Service"]
    },
    {
      title: "Housekeeping Department", 
      description: "Pelatihan kebersihan kamar, public area, laundry dan room service",
      icon: <Bed className="w-8 h-8" />,
      features: ["Room Attendant", "Public Area Cleaner", "Laundry", "Room Service"]
    },
    {
      title: "Food & Beverage Service",
      description: "Pelatihan pelayanan restoran, bar, banquet dan coffee shop",
      icon: <Utensils className="w-8 h-8" />,
      features: ["Waiter/Waitress", "Bartender", "Barista", "Banquet Service"]
    },
    {
      title: "Food Production",
      description: "Pelatihan kitchen, pastry, bakery dan basic cooking techniques",
      icon: <Coffee className="w-8 h-8" />,
      features: ["Commis Chef", "Pastry Chef", "Baker", "Kitchen Helper"]
    }
  ]

  const benefits = [
    "Sertifikat kompetensi terakreditasi",
    "Instruktur berpengalaman dari industri hotel",
    "Praktik kerja langsung di hotel berbintang",
    "Bantuan penempatan kerja",
    "Modul pelatihan terupdate",
    "Kelas terbatas untuk hasil maksimal"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src="/logo.png" alt="CV PARAMARTA KURNIA KREASINDO" className="h-10 w-10" />
              <div>
                <h1 className="text-lg font-bold text-gray-900">CV PARAMARTA</h1>
                <p className="text-xs text-gray-600">KURNIA KREASINDO</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition">Beranda</a>
              <a href="#programs" className="text-gray-700 hover:text-blue-600 transition">Program</a>
              <a href="#benefits" className="text-gray-700 hover:text-blue-600 transition">Keunggulan</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Kontak</a>
              <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                <a href="#privacy">Privacy</a>
              </Button>
              <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                <a href="#terms">Terms</a>
              </Button>
            </div>

            <Button 
              variant="ghost" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Beranda</a>
              <a href="#programs" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Program</a>
              <a href="#benefits" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Keunggulan</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Kontak</a>
              <a href="#privacy" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Privacy</a>
              <a href="#terms" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Terms</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                <Award className="w-4 h-4 mr-2" />
                Terpercaya Sejak 2010
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                <span className="text-blue-600">CV PARAMARTA KURNIA KREASINDO</span>
                <br />
                Pelatihan Kerja Pariwisata dan Perhotelan
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Wujudkan karir impian Anda di industri pariwisata dan perhotelan dengan pelatihan profesional yang komprehensif dan terakreditasi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Daftar Sekarang
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Download Brosur
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="space-y-6">
                <img 
                  src="/hero-hotel.jpg" 
                  alt="Hotel Training" 
                  className="w-full h-64 object-cover rounded-2xl shadow-xl"
                />
                <div className="bg-gradient-to-r from-blue-100 to-amber-100 rounded-2xl p-8 shadow-xl">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">5000+</div>
                      <div className="text-sm text-gray-600">Alumni Sukses</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-amber-600">50+</div>
                      <div className="text-sm text-gray-600">Partner Hotel</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">95%</div>
                      <div className="text-sm text-gray-600">Tingkat Penempatan</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600">15+</div>
                      <div className="text-sm text-gray-600">Tahun Pengalaman</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section id="programs" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Program Pelatihan Unggulan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilih program pelatihan yang sesuai dengan minat dan bakat Anda untuk karir di industri perhotelan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingPrograms.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-t-4 border-t-blue-600 overflow-hidden">
                <div className="h-32 bg-gray-100">
                  {index === 0 && <img src="/front-office.jpg" alt={program.title} className="w-full h-full object-cover" />}
                  {index === 2 && <img src="/culinary-training.jpg" alt={program.title} className="w-full h-full object-cover" />}
                  {index !== 0 && index !== 2 && (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-amber-50">
                      {program.icon}
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{program.title}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Mengapa Memilih <span className="text-blue-600">CV PARAMARTA KURNIA KREASINDO</span>
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                    </div>
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Mentor Berpengalaman</h3>
                    <p className="text-gray-600">Instruktur profesional dari hotel berbintang</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Sertifikat Terakreditasi</h3>
                    <p className="text-gray-600">Diakui industri perhotelan nasional</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Jaringan Luas</h3>
                    <p className="text-gray-600">Kerjasama dengan 50+ hotel dan restoran</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Hubungi Kami
            </h2>
            <p className="text-xl text-gray-600">
              Siap memulai karir di industri pariwisata? Hubungi kami sekarang!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl">Informasi Kontak</CardTitle>
                <CardDescription>
                  CV PARAMARTA KURNIA KREASINDO
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Alamat</h4>
                    <p className="text-gray-600">
                      JL. HOS COKROAMINOTO 118, Desa/Kelurahan Singonegaran, 
                      Kec.Pesantren, Kota Kediri, Provinsi Jawa Timur
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <div>
                    <h4 className="font-semibold">Telepon</h4>
                    <p className="text-gray-600">085285703497</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <div>
                    <h4 className="font-semibold">Jam Operasional</h4>
                    <p className="text-gray-600">
                      Senin - Jumat: 08:00 - 17:00<br />
                      Sabtu: 08:00 - 15:00<br />
                      Minggu: Tutup
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl">Form Pendaftaran</CardTitle>
                <CardDescription>
                  Isi form berikut untuk informasi pendaftaran
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nama Lengkap</label>
                    <input type="text" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">No. Telepon</label>
                    <input type="tel" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Program Pelatihan</label>
                  <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Pilih Program</option>
                    <option>Front Office Department</option>
                    <option>Housekeeping Department</option>
                    <option>Food & Beverage Service</option>
                    <option>Food Production</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Pesan</label>
                  <textarea className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" rows={4}></textarea>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Kirim Pendaftaran
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section id="privacy" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            <CardHeader>
              <CardTitle className="text-2xl">Privacy Policy</CardTitle>
              <CardDescription>
                Kebijakan Privasi CV PARAMARTA KURNIA KREASINDO
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">1. Pengumpulan Informasi</h3>
                <p className="text-gray-600">
                  Kami mengumpulkan informasi pribadi yang Anda berikan secara sukarela saat mendaftar program pelatihan, 
                  termasuk nama, alamat, nomor telepon, email, dan informasi pendidikan.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">2. Penggunaan Informasi</h3>
                <p className="text-gray-600">
                  Informasi yang kami kumpulkan digunakan untuk:
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Memproses pendaftaran program pelatihan</li>
                  <li>Memberikan informasi tentang program kami</li>
                  <li>Meningkatkan layanan kami</li>
                  <li>Menghubungi Anda terkait penempatan kerja</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">3. Perlindungan Data</h3>
                <p className="text-gray-600">
                  Kami berkomitmen untuk melindungi data pribadi Anda dan tidak akan membagikan informasi 
                  kepada pihak ketiga tanpa persetujuan Anda, kecuali diwajibkan oleh hukum.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">4. Kontak</h3>
                <p className="text-gray-600">
                  Untuk pertanyaan tentang kebijakan privasi kami, hubungi:
                  Email: privacy@paramarta-kurnia-kreasindo.com | Telepon: 085285703497
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Terms and Conditions Section */}
      <section id="terms" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            <CardHeader>
              <CardTitle className="text-2xl">Terms and Conditions</CardTitle>
              <CardDescription>
                Syarat dan Ketentuan CV PARAMARTA KURNIA KREASINDO
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">1. Pendaftaran Program</h3>
                <p className="text-gray-600">
                  Peserta harus melengkapi formulir pendaftaran dengan informasi yang akurat dan benar. 
                  Kami berhak menolak pendaftaran jika informasi yang diberikan tidak lengkap atau tidak valid.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">2. Pembayaran</h3>
                <p className="text-gray-600">
                  Biaya pelatihan harus dibayar lunas sebelum program dimulai. Pembayaran yang telah dilakukan 
                  tidak dapat dikembalikan kecuali ada pembatalan dari pihak kami.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">3. Kehadiran dan Disiplin</h3>
                <p className="text-gray-600">
                  Peserta diwajibkan mengikuti semua sesi pelatihan dengan minimal kehadiran 80%. 
                  Keterlambatan dan ketidakhadiran tanpa alasan yang valid dapat mengakibatkan penghapusan dari program.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">4. Sertifikat</h3>
                <p className="text-gray-600">
                  Sertifikat akan diberikan kepada peserta yang berhasil menyelesaikan program dengan nilai 
                  minimal 70% dan kehadiran 80%.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">5. Penempatan Kerja</h3>
                <p className="text-gray-600">
                  Kami akan membantu penempatan kerja untuk alumni yang memenuhi syarat, namun tidak menjamin 
                  penempatan kerja 100%.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">6. Perubahan Kebijakan</h3>
                <p className="text-gray-600">
                  CV PARAMARTA KURNIA KREASINDO berhak mengubah syarat dan ketentuan sewaktu-waktu tanpa pemberitahuan terlebih dahulu.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="/logo.png" alt="CV PARAMARTA KURNIA KREASINDO" className="h-10 w-10" />
                <div>
                  <h3 className="text-lg font-bold">CV PARAMARTA</h3>
                  <p className="text-sm text-gray-400">KURNIA KREASINDO</p>
                </div>
              </div>
              <p className="text-gray-400">
                Pelatihan Kerja Pariwisata dan Perhotelan Swasta Terpercaya di Kediri
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Front Office Training</li>
                <li>Housekeeping Training</li>
                <li>F&B Service Training</li>
                <li>Culinary Training</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  JL. HOS COKROAMINOTO 118, Kediri
                </p>
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  085285703497
                </p>
                <p className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  info@paramarta-kurnia-kreasindo.com
                </p>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-800" />
          
          <div className="text-center text-gray-400">
            <p>&copy; 2024 CV PARAMARTA KURNIA KREASINDO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}