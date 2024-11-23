🚀 Next.js 15 Authentication App

** Bu proje, Next.js 15 kullanılarak oluşturulmuş bir kimlik doğrulama uygulamasıdır. 
Sahte giriş bilgileriyle çalışan sistem, protected routes ve dynamic navigation özelliklerine sahiptir.
Material-UI ile şık bir tasarım sunarken, TypeScript tabanlı yapısı sayesinde güvenilir ve okunabilir bir kod altyapısı sağlar.

📋 Özellikler
. Mock login system : Gerçek bir sunucuya ihtiyaç duymadan giriş işlemleri yapılabilir.
. Protected routes: Sadece giriş yapmış kullanıcıların erişebileceği özel sayfalar.
. Kullanıcı Arayüzü: Material-UI kullanılarak tasarlanmış.
. Gelişmiş Tip Kontrolü: TypeScript ile kodda hata oranı en aza indirilir.
. Hızlı Başlangıç: Next.js 15 ve React 18 ile tam uyumluluk.

🛠️ Technologies Used
. Next.js 15	
. TypeScript	
. Material-UI

🖥️ Installation
1. Projeyi Klonlayın:
     git clone <repository-url>
     cd <project-directory>

2. Bağımlılıkları Yükleyin:
     npm install  

3. Geliştirme Sunucusunu Başlatın:
     npm run dev  
4.Uygulamayı tarayıcıda açın
     Uygulamayı Tarayıcıda Açın:
     http://localhost:3000


🔑 Giriş Bilgileri
Sisteme giriş yapmak için aşağıdaki bilgiler kullanılabilir:

E-posta: zeynep@test.com
Şifre: 12345


🛡️ Çalışma Prensibi
 .Kimlik Doğrulama Sistemi:
     .Kullanıcı giriş yaparken, giriş bilgileri loginService ile doğrulanır.
     .Giriş başarılı olursa, localStorage’a bir oturum belirteci (auth-token) kaydedilir.
 .Protected Route:
     ./dashboard gibi özel sayfalar, ProtectedRoute bileşeniyle korunur.
     .Kullanıcı giriş yapmamışsa, otomatik olarak giriş sayfasına yönlendirilir.
 .Çıkış Sistemi:
     .Çıkış yapıldığında oturum belirteci localStorage’dan silinir ve kullanıcı giriş sayfasına yönlendirilir.

Gelecekteki Geliştirme Önerileri
 . Gerçek Sunucu Desteği: Sahte giriş mantığı, bir API ile entegre edilebilir.
 . Rol Yönetimi: Kullanıcı ve yönetici rolleri için farklı yetkilendirme eklenebilir.
 . Çok Dilli Destek: Uygulama, birden fazla dili destekleyecek şekilde genişletilebilir.
 . Testler: Daha güvenilir bir altyapı için birim ve entegrasyon testleri eklenebilir.

📄 Lisans
.Bu proje MIT Lisansı altında lisanslanmıştır .



   
