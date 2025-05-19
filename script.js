

// === Bu kodlar Emin Kişioğlu tarafından yazıldı ===
// 
// 
// // === NAVBAR SCROLL HIDE/SHOW ===
let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.classList.add("hidden"); // Aşağı kayınca gizle
  } else {
    navbar.classList.remove("hidden"); // Yukarı kayınca göster
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// === HAMBURGER MENU TOGGLE ===
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("open");
});

// === LANGUAGE SWITCH ===
function changeLanguage(lang) {
  localStorage.setItem("lang", lang);
  const translations = {
    en: {
      logo: "4AK",
      about: "About Us",
      intl: "International Marketing Consulting",
      management: "Management Consulting",
      franchising: "Franchising Consulting",
      education: "Training",
      contact: "Contact",
      references: "References",
      referencesPageTitle: "References",
refGovTitle: "Government Institutions",
refCompaniesTitle: "Companies",
refFranchiseTitle: "Franchising",
refEduTitle: "Education",
      footer: "© 2024 4AK Consultancy. All rights reserved.",
      contactPageTitle: "Our Contact Information",
contactPageSubtitle: "You can use the contact channels below to reach 4AK Consultancy and learn more about our services.",

contactBox1Title: "Phone",
contactBox1Text: "• Phone: +90 532 432 5400",
contactBox2Title: "Email",
contactBox2Text: "• Email: alparslankuloglu@gmail.com",
contactBox3Title: "Address",
contactBox3Text: "• Address: Alacaatlı Mahallesi, Çankaya, Ankara 06810, Türkiye",

      educationPageTitle: "Training Services",
educationText: `4AK Consultancy offers a comprehensive range of training services to help businesses and professionals enhance their knowledge and skills. Our training programs are designed to equip participants with the critical competencies required in the business world and to elevate their existing capabilities to higher levels. Each program combines theory with practical applications, delivering hands-on knowledge that participants can apply directly to their professional roles.

With 23 years of experience in both corporate and academic settings, we tailor our professional training programs to meet sector-specific needs. Our content addresses real-world business challenges and provides participants with actionable solutions to overcome them.<br><br><br><br>

Our training programs include:<br><br>
• Quality Management and Total Quality Management (TQM): This module provides participants with the knowledge and skills needed to understand quality standards, quality assurance systems, and process improvement techniques. Through the principles of Total Quality Management, we support companies in building a strong quality culture. Participants learn how to apply quality measurement and auditing techniques directly within their business operations.<br><br>
• Project Management and Leadership Skills: This program, aligned with PMI (Project Management Institute) and PRINCE2 standards, covers effective project planning, monitoring, and control practices.`,

      franchisingPageTitle: "Franchising Consulting Services",
franchisingText: `4AK Consultancy offers comprehensive franchising consultancy services to support brands in expanding across domestic and international markets. We develop strategic solutions especially tailored for brands operating in the food and beverage sector, enabling them to build strong and sustainable franchise networks. Franchising stands out as an effective business model that facilitates the rapid and controlled growth of a brand, and 4AK Consultancy provides end-to-end support to help you implement this model successfully.

Our franchising consultancy services begin with the development of a robust franchise model. During this process, we ensure the establishment of operational standards that preserve the brand’s values and business model while enhancing efficiency. We customize the franchise system in alignment with the dynamics of the industry and the needs of the target market. Whether you're building a new franchise network or optimizing an existing one, we offer tailored solutions to meet your goals.

In the model development phase, we define franchisee selection criteria, training programs, and audit mechanisms. We design comprehensive training and support programs to ensure that franchisees operate in accordance with the brand's standards. These training modules cover critical areas such as operational management, customer relations, sales and marketing, product quality, and brand compliance.

The drafting and management of franchise agreements enable brands to grow under legal assurance. 4AK Consultancy ensures that franchise agreements are prepared in compliance with both local and international laws. We develop agreement models that clearly outline the rights and obligations of both franchisor and franchisee, safeguarding brand rights and the integrity of the business model. Through effective contract management, we protect the legal and commercial interests of our clients.

Our operations management and audit services ensure that your franchise network operates in line with established standards. We continuously monitor the performance of franchise branches through on-site inspections, performance evaluations, and improvement recommendations. This helps maintain high service quality and customer satisfaction across all locations. We ensure that every franchise unit upholds the brand’s core values and quality standards.

Market entry strategies allow brands to position themselves successfully in both domestic and international markets. 4AK Consultancy helps brands connect with the right distributors and business partners in their target markets. We support brands in gaining a competitive edge by developing marketing and sales strategies tailored to local market dynamics. For brands seeking to expand abroad, we provide guidance on cultural differences and local consumer expectations.

Through brand management and marketing strategies, we help franchise-based brands establish a strong market position. We develop strategic solutions to increase brand awareness and offer support in areas such as digital marketing and customer relationship management. Our creative and strategic campaigns aim to build a powerful brand image both locally and internationally.

Our franchisee training and support programs ensure that franchisees operate in line with brand standards. These trainings cover essential topics including sales techniques, customer service, operational efficiency, and product quality. By offering continuous training and performance assessment programs, we help maintain high quality standards across your franchise network.

Franchisee relationship management is one of the cornerstones of a successful franchise network. 4AK Consultancy develops strategies to strengthen communication and collaboration between franchisors and franchisees. We monitor franchisee performance, resolve challenges, and foster brand loyalty. Franchisee satisfaction is the key to building a strong and sustainable franchise system.

Through international franchising management, we ensure the sustainable growth of brands in overseas markets. We develop strategies suited to the cultural and commercial dynamics of local markets, ensuring compliance with local regulations and customer expectations. By establishing strong partnerships with local stakeholders and distributors, we support the secure and confident expansion of brands into global markets.

4AK Consultancy is the strategic partner for brands aiming to grow through the franchising model. We enable brands to establish a strong and sustainable franchise network and support its effective management and continuous development. From market entry to brand management, operational support, and customer relationship management, we deliver tailored solutions to meet your business needs. Our goal is to develop practical and sustainable solutions that empower our clients to grow their brands with confidence.`,


      managementPageTitle: "Management Consulting",
managementText: `4AK Consulting provides comprehensive management consulting services to help businesses optimise their management and operational processes, achieve their strategic goals and achieve sustainable growth. Our company offers expert solutions in strategic planning, performance management, project management and organisational structure development to ensure that businesses have a strong and flexible structure.

Our strategic management services focus on helping businesses develop strategies that meet their long-term goals. We clarify the vision and mission of companies and create strategic road maps with sectoral analyses and competition assessments. In this process, critical elements such as market analysis, target setting, resource planning and strategic risk management are addressed. We develop strategic thinking skills for companies to gain competitive advantage and adapt to dynamic market conditions.

Corporate performance management is a critical element for businesses to continuously monitor and improve their performance. 4AK Consultancy evaluates the performance of businesses in financial, customer, internal processes and learning and development dimensions with Balanced Scorecard (BSC) and performance indicators. With performance measurement systems, we identify the strengths and weaknesses of businesses, identify opportunities for improvement and provide strategic recommendations for sustainable growth.

Our project management services enable businesses to complete their projects on time, within budget and at the desired quality standards. We use project management methodologies in accordance with PMI (Project Management Institute) and PRINCE2 standards. We structure project planning, risk management, resource management and project monitoring processes and guarantee the successful completion of projects. We have extensive experience in defence, technology, software and engineering projects.

With our process management and business process improvement services, we enable businesses to increase their productivity. We analyse business processes and identify bottlenecks and inefficiencies. We enable businesses to reduce costs and increase operational efficiency through digitalisation of processes, automation solutions and performance improvement techniques. We develop systems for continuous monitoring and improvement of processes.

Our organisational structure and leadership development services enable businesses to create a strong and effective management structure. We analyse the organisational structures of companies, evaluate the effectiveness of management levels and offer leadership development programmes. We increase the management capacity of companies through corporate culture development, leadership training and executive coaching. By strengthening leadership skills, we ensure that companies have a more effective management culture.

We support businesses to adapt to the modern business structure in change management and digital transformation processes. We create digitalisation strategies of companies and provide guidance on technology adaptation and digitalisation of business processes. We enable businesses to gain competitive advantage by increasing their productivity in digital transformation projects.

Our marketing and brand management services enable brands to achieve a strong and recognisable position. We support brands to achieve sustainable growth by developing customer relationship management, digital marketing, brand awareness and customer loyalty strategies. We provide strategic guidance to businesses in the planning, implementation and monitoring of marketing campaigns.

4AK Consultancy's management consultancy services are tailored to the needs of each business. We develop strategic and operational solutions that will enable our clients to achieve their goals and ensure that these solutions are implemented effectively in the field. We stand by them as a reliable strategic business partner for businesses to achieve sustainable growth and competitive advantage.`,

      intlPageTitle: "International Marketing Consulting",
intlText: `4AK Consultancy provides comprehensive overseas consultancy services to enable businesses to enter global markets safely and effectively. Our company provides small and medium-sized enterprises (SMEs) operating in the defence industry, IT and software sectors with a competitive advantage in international markets. With a particular focus on the Gulf Region, Central Asia, Southeast Asia and Europe, we enable our clients to establish sustainable relationships with reliable business partners and customers in these regions.

Our overseas consultancy services start with identifying the target markets of our customers and ensuring that they operate effectively in these markets. We ensure that the products and services of companies operating in the defence, IT and software sectors are delivered to the right target audience and that connections are established with reliable business partners and customers in these markets. We provide strategic consultancy to our customers in complex commercial processes such as proposal preparation, contract negotiations and signing, financing management, process and project management.

With our customer and business partner matchmaking services, we connect our customers with reliable and strategic business partners in international markets. Thanks to our strong business network, we bring our customers together with the right distributors, suppliers and business partners, evaluate companies with potential for cooperation and support our customers to establish sustainable and reliable partnerships.

4AK Consultancy also analyses the needs arising in international projects and provides cooperation with appropriate solution providers. We manage the contract and financing processes required for the realisation of projects, support participation in international tender processes and ensure that SMEs play an active role in these processes. In this context, we increase the effectiveness and reliability of companies operating in the defence and IT sectors in international markets.

Customer relationship management is the key to success in international markets. 4AK Consultancy helps our clients expand their customer portfolios in new markets in a safe and sustainable way. We develop customer relations strategies in line with local market dynamics and increase customer satisfaction and loyalty.

We manage the processes of participation in international fairs and events, and ensure that our customers meet the right business partners and seize new business opportunities at these events. Within the scope of business development activities, we bring our customers together with potential buyers and provide strategic support in trade negotiations.

As 4AK Consultancy, we support our clients to grow confidently in global markets and stand by them as a strategic business partner to achieve sustainable international success. Thanks to our many years of experience, strong regional connections and sectoral expertise, we enable our clients to achieve success.`,
aboutPageTitle: "About Our Founder & Vision",
      founderTitle: "About the Founder - CV",
      founderText: `The founder of 4AK Consulting is a leader with over 25 years of experience in international business development and strategy, specialising in the defence industry, IT, software and security sectors. The founder started his career in Turkey's leading defence and technology companies, where he served in senior management and strategic leadership positions and wrote success stories in international markets and large-scale projects.<br><br>
The founder has assumed a leading role in business development and strategy formulation in international defence industry projects. He established strong business networks especially in strategic markets such as the Gulf Region, Central Asia and Southeast Asia, and supported the entry of companies operating in these regions into global markets. Through successful negotiations and cooperation, Turkish defence industry companies have become well-known in international markets.<br><br>
In particular, the Company provided strategic consultancy services to help companies developing high-technology products and services achieve their international growth targets, and took the lead in technology and innovation-oriented projects. He worked as a senior executive at Havelsan, Meteksan and other leading defence companies, where he developed export strategies and contributed to breaking sales records.<br><br>
He was the founding deputy general manager of one of the fastest growing startup companies in Turkey and helped the company gain a strong position in regional markets. Under his leadership, the company achieved significant growth in a short period of time and became a strong brand in both local and international markets.<br><br>
Through 4AK Consultancy, he offers his deep experience in the defence industry, information technologies, software and security sectors to a wider customer base. With his strategic thinking, results orientation and strong negotiation skills, he supports his clients to achieve their sustainable growth targets.<br><br>
The founder provides strategic consultancy services to enable businesses to confidently expand into international markets with his experience in business development and strategy. He guides clients in critical areas such as strategic planning, market entry strategies, customer relationship management and building local partnerships.<br><br>
He is also experienced in education and leadership. He has developed the knowledge and skills of many professionals through years of lectures and seminars at Ankara University and other prestigious institutions. He has provided extensive training in Quality Management, Project Management, Strategic Management and Leadership, providing a strong foundation for participants to achieve success in the business world.<br><br>
The founder has an extensive cross-sector network and deep knowledge. He provides practical and applicable solutions to businesses in international business development, strategic planning and project management. He prioritises building long-term business relationships and trusted partnerships while enabling his clients to achieve their growth goals.<br><br>
Today, under the leadership of 4AK Consultancy, it provides strategic solutions for SMEs and large-scale companies operating in different sectors to achieve success in international markets. Led by the founder, the company is a strong business partner with values of reliability, expertise and customer orientation.`,
      heroTitle: "For Adding Knowledge (4AK) Consulting",
      introTitle: "About 4AK Consultancy",
      introText: `4AK Consultancy, founded in 2014, is a management consulting firm that provides strategic consulting and business development services to small and medium-sized enterprises (SMEs) seeking to expand into international markets. Our company was founded on the vision of combining more than 25 years of international experience gained in the defence industry, information and communication technologies (IT), software and security sectors with strategic solutions to support businesses to achieve their growth goals.<br><br>
As 4AK Consultancy, we enable our clients to access foreign markets and achieve sustainable success in these markets. We support companies operating in the defence, IT, software and security sectors to establish connections with reliable business partners and customers in international markets by creating entry strategies to target markets and facilitating their access to these markets. We also provide strategic advice on complex commercial processes such as bid preparation, tender processes and contract management, as well as process and project management services to help companies optimise their international operations.<br><br>
With a particular focus on the Gulf, Central Asia, Southeast Asia and Europe, 4AK Consultancy closely monitors the local business culture and regulatory requirements in these regions and provides strategic solutions to enable our clients to grow safely and effectively in global markets.<br><br>
4AK Consultancy not only provides access to international markets, but also offers consultancy services to strengthen the internal structure and management processes of businesses. In the field of management consultancy, we offer solutions to businesses in areas such as strategic planning, corporate performance management, project management and process optimisation. We support businesses to ensure that their organisational structures are efficient and flexible in order to achieve their growth targets.<br><br>
Franchising consultancy is another area of expertise of 4AK Consultancy. We provide strategic support to brands operating especially in the food and beverage sector on market entry strategies, franchise model development, operations management and brand management. We help brands that want to grow with the franchising model to create a sustainable and profitable franchise network.<br><br>
Our company's approach is to offer solutions tailored to the needs and goals of each of our clients. We utilise our industry know-how and international experience to help our clients achieve strong and sustainable growth. We plan and implement each project in line with our clients' strategic objectives.<br><br>
With our extensive international network and regional experience, we enable our customers to grow confidently in global markets. Thanks to the reliable relationships we have established with our business partners, we offer our customers practical and sustainable solutions in accessing new markets, business development and trade processes. We see every customer we cooperate with as a business partner and we accept their success as our own success.<br><br>
4AK Consultancy makes a difference with its flexible and customer-oriented approach. We serve our clients with the principles of strategic thinking, result orientation and operational excellence. We develop customised solutions for each client and ensure effective implementation of strategies in the field.<br><br>
Under the leadership of our founder, 4AK Consultancy adopts a flexible and customer-oriented approach in managing our clients' business development processes. We focus on building long-term business relationships and being a reliable strategic partner to our clients.<br><br>
Thanks to our international experience, strong business network and industry knowledge, we offer practical and sustainable solutions to all the challenges our clients may face in global markets. We not only advise our clients, but also ensure that strategies are implemented on the ground and results are monitored.<br><br>
4AK Consultancy offers customised consultancy services, recognising that every business has different needs. With our sectoral expertise and practical approach, we enable our clients to achieve their global growth targets with confidence.<br><br>
The core values of our company are honesty, transparency and customer satisfaction. We build our business on the success of our clients and stand by them as a reliable business partner in their growth journey.<br><br>
4AK Consultancy is positioned as a reliable business partner in the business world by providing strategic consultancy, management consultancy, franchising and training services to its customers. Feel free to contact us to answer your questions and share how we can support you in your projects.<br><br>
We offer customised, practical and sustainable solutions to our clients, supporting them to achieve their business goals. Contact us and discover together how we can help you on your business growth journey.`
 },
    tr: {
      logo: "4AK",
      about: "Hakkımızda",
      intl: "Yurtdışı Pazarlama Danışmanlığı",
      management: "Yönetim Danışmanlığı",
      franchising: "Franchising Danışmanlığı",
      education: "Eğitim",
      contact: "İletişim",
      references: "Referanslarımız",
      referencesPageTitle: "Referanslarımız",
refGovTitle: "Devlet Kurumları",
refCompaniesTitle: "Şirketler",
refFranchiseTitle: "Franchising",
refEduTitle: "Eğitim",
      footer: "© 2024 4AK Danışmanlık. Tüm hakları saklıdır.",
     contactPageTitle: "İletişim Bilgilerimiz",
contactPageSubtitle: "4AK Danışmanlık ile iletişime geçmek ve hizmetlerimiz hakkında daha fazla bilgi almak için aşağıdaki iletişim kanallarını kullanabilirsiniz.",

contactBox1Title: "Telefon",
contactBox1Text: "• Telefon: +90 532 432 5400",
contactBox2Title: "E-posta",
contactBox2Text: "• Email: alparslankuloglu@gmail.com",
contactBox3Title: "Adres",
contactBox3Text: "• Adres: Alacaatlı Mahallesi, Çankaya, Ankara 06810, Türkiye",

      educationPageTitle: "Eğitim Hizmetleri",
educationText: `4AK Danışmanlık, işletmelerin ve profesyonellerin bilgi ve becerilerini geliştirmeleri için geniş kapsamlı eğitim hizmetleri sunar. Eğitim programlarımız, katılımcıların iş dünyasında ihtiyaç duydukları kritik becerileri kazanmalarını ve mevcut yetkinliklerini daha ileri seviyelere taşımalarını sağlar. Eğitimlerimiz, teori ile pratiği birleştirir ve katılımcılara uygulamalı bilgiler sunar.

23 yıllık şirket ve akademik dünyadaki eğitim tecrübesi ile, profesyonel eğitim programlarımızı sektörel ihtiyaçlara uygun hale getiriyoruz. Eğitim içeriklerimiz, işletmelerin karşılaştıkları gerçek dünya zorluklarını ele alır ve katılımcılara bu zorlukların üstesinden gelmeleri için pratik çözümler sunar.<br><br><br><br>

Eğitim programlarımız arasında şunlar yer alır:<br><br>
• Kalite Yönetimi ve Toplam Kalite Yönetimi (TQM): Katılımcılara kalite standartları, kalite güvence sistemleri ve süreç iyileştirme teknikleri konusunda bilgi ve beceriler kazandırır. Toplam Kalite Yönetimi prensipleri ile işletmelerin kalite kültürü oluşturmalarına destek oluruz. Katılımcılar, kalite ölçüm ve denetim tekniklerini öğrenir ve bu bilgileri iş süreçlerine entegre eder.<br><br>
• Proje Yönetimi ve Liderlik Becerileri: PMI (Project Management Institute) ve PRINCE2 standartlarına uygun olarak proje planlama, izleme ve kontrol`,
franchisingPageTitle: "Franchising Danışmanlığı Hizmetleri",
franchisingText: `4AK Danışmanlık, markaların yurtiçi ve yurtdışı pazarlarda büyümelerini desteklemek için kapsamlı franchising danışmanlık hizmetleri sunar. Özellikle yiyecek ve içecek sektöründe faaliyet gösteren markaların güçlü ve sürdürülebilir franchise ağları oluşturmasına yönelik stratejik çözümler geliştiriyoruz. Franchising, bir markanın hızlı ve kontrollü bir şekilde genişlemesini sağlayan etkili bir iş modeli olarak öne çıkar ve 4AK Danışmanlık, bu modeli başarıyla uygulamanız için kapsamlı destek sağlar.

Franchising danışmanlığı hizmetlerimiz, markaların güçlü bir franchise modeli geliştirmesi ile başlar. Bu süreçte, markanın değerleri ve iş modelini koruyarak, operasyonel verimliliği artıracak standartların belirlenmesini sağlıyoruz. Franchise modelini, markanın faaliyet gösterdiği sektörün dinamiklerine ve hedef pazarın ihtiyaçlarına uygun şekilde özelleştiriyoruz. İster yeni bir franchise ağı oluşturuyor olun, ister mevcut franchise yapınızı optimize etmek isteyin, size özel çözümler sunuyoruz.

Franchise modeli geliştirme aşamasında, markaların franchisee seçim kriterlerini, eğitim programlarını ve denetim mekanizmalarını oluşturuyoruz. Franchisee’lerin markanın standartlarına uygun şekilde faaliyet göstermelerini sağlamak için kapsamlı eğitim ve destek programları tasarlıyoruz. Eğitim içerikleri; operasyonel yönetim, müşteri ilişkileri, satış ve pazarlama, ürün kalitesi ve marka standartları gibi kritik alanları kapsar.

Franchise sözleşmelerinin hazırlanması ve yönetimi, markaların hukuki güvence altında büyümelerini sağlar. 4AK Danışmanlık, franchise sözleşmelerinin yerel ve uluslararası hukuka uygun olarak hazırlanmasını sağlar. Franchisee ve franchisor arasındaki hak ve yükümlülükleri net bir şekilde tanımlayan, marka haklarını ve iş modelini koruyan sözleşme modelleri geliştiriyoruz. Sözleşme yönetimi ile markaların yasal ve ticari çıkarlarını koruyoruz.

Operasyon yönetimi ve denetim hizmetlerimiz, franchise ağınızın standartlara uygun şekilde faaliyet göstermesini sağlar. Yerinde denetimler, performans değerlendirmeleri ve iyileştirme önerileri ile franchise şubelerinin etkinliğini sürekli olarak izliyoruz. Markaların hizmet kalitesini ve müşteri memnuniyetini yüksek seviyede tutmalarını sağlıyoruz. Her franchise şubesinin markanın değerlerine ve kalite standartlarına uygun şekilde faaliyet göstermesini güvence altına alıyoruz.

Pazara giriş stratejileri, markaların yurtiçi ve yurtdışı pazarlarda başarılı bir şekilde konumlanmalarını sağlar. 4AK Danışmanlık, markaların hedef pazarlarda doğru distribütörler ve iş ortakları ile buluşmalarını sağlar. Yerel pazar dinamiklerine uygun pazarlama ve satış stratejileri geliştirerek markaların rekabet avantajı elde etmelerini destekliyoruz. Özellikle yabancı pazarlara açılmak isteyen markalar için kültürel farklılıklar ve yerel müşteri beklentileri konusunda rehberlik ediyoruz.

Marka yönetimi ve pazarlama stratejileri ile franchising modeli ile büyüyen markaların güçlü bir piyasa konumuna sahip olmalarını sağlıyoruz. Marka bilinirliğini artıracak stratejik çözümler geliştiriyor, dijital pazarlama ve müşteri ilişkileri yönetimi alanında destek sunuyoruz. Yerel ve uluslararası pazarlarda güçlü bir marka imajı oluşturmak için yaratıcı ve stratejik kampanyalar tasarlıyoruz.

Franchisee eğitim ve destek programlarımız ile franchisee’lerin markanın standartlarına uygun bir şekilde faaliyet göstermelerini sağlıyoruz. Eğitimlerimiz; satış teknikleri, müşteri hizmetleri, operasyonel verimlilik ve ürün kalitesi gibi kritik alanları kapsar. Franchisee’lere yönelik sürekli eğitim ve performans değerlendirme programları ile franchise ağınızın kalite standartlarını koruruz.

Franchisee ilişkileri yönetimi, başarılı bir franchise ağının temel taşlarından biridir. 4AK Danışmanlık, franchisor ve franchisee arasındaki iletişimi ve işbirliğini güçlendiren stratejiler geliştirir. Franchisee’lerin performansını izler, karşılaştıkları sorunları çözüme kavuşturur ve marka sadakatini artırırız. Franchisee memnuniyeti, güçlü ve sürdürülebilir bir franchise ağının anahtarıdır.

Uluslararası franchising yönetimi ile markaların yurtdışında sürdürülebilir büyümelerini sağlıyoruz. Yerel pazarların kültürel ve ticari dinamiklerine uygun stratejiler geliştiriyor, markaların yerel regülasyonlara ve müşteri beklentilerine uyum sağlamalarını sağlıyoruz. Yerel ortaklar ve distribütörler ile güçlü işbirlikleri kurarak markaların uluslararası pazarlarda güvenle büyümelerini destekliyoruz.

4AK Danışmanlık, franchising modeli ile büyümek isteyen markaların stratejik iş ortağıdır. Markaların güçlü ve sürdürülebilir bir franchise ağı oluşturmalarını sağlıyor, bu ağın etkin yönetimini ve sürekli gelişimini destekliyoruz. İşletmelerin pazara giriş, marka yönetimi, operasyonel destek ve müşteri ilişkileri yönetimi konularında ihtiyaçlarına uygun çözümler sunuyoruz. Müşterilerimizin markalarını güvenle büyütmelerini sağlayacak pratik ve sürdürülebilir çözümler geliştiriyoruz.`,

      managementPageTitle: "Yönetim Danışmanlığı",
managementText: `4AK Danışmanlık, işletmelerin yönetim ve operasyonel süreçlerini optimize etmelerine, stratejik hedeflerine ulaşmalarını sağlamalarına ve sürdürülebilir büyüme elde etmelerine yardımcı olmak amacıyla kapsamlı yönetim danışmanlığı hizmetleri sunar. Şirketimiz, işletmelerin güçlü ve esnek bir yapıya sahip olmalarını sağlamak için stratejik planlama, performans yönetimi, proje yönetimi ve organizasyonel yapı geliştirme konularında uzman çözümler sunar.

Stratejik yönetim hizmetlerimiz, işletmelerin uzun vadeli hedeflerine uygun stratejiler geliştirmelerine odaklanır. Şirketlerin vizyon ve misyonlarını netleştirir, sektörel analizler ve rekabet değerlendirmeleri ile stratejik yol haritaları oluştururuz. Bu süreçte, pazar analizi, hedef belirleme, kaynak planlama ve stratejik risk yönetimi gibi kritik unsurlar ele alınır. Şirketlerin rekabet avantajı elde etmeleri ve dinamik piyasa koşullarına uyum sağlamaları için stratejik düşünme becerilerini geliştiriyoruz.

Kurumsal performans yönetimi, işletmelerin performanslarını sürekli olarak izlemeleri ve iyileştirmeleri için kritik bir unsurdur. 4AK Danışmanlık, Balanced Scorecard (BSC) ve performans göstergeleri ile işletmelerin finansal, müşteri, iç süreçler ve öğrenme-gelişim boyutlarında performanslarını değerlendirir. Performans ölçüm sistemleri ile işletmelerin güçlü ve zayıf yönlerini belirler, iyileştirme fırsatlarını ortaya çıkarır ve sürdürülebilir büyüme için stratejik öneriler sunar.

Proje yönetimi hizmetlerimiz, işletmelerin projelerini zamanında, bütçe dahilinde ve istenen kalite standartlarında tamamlamalarını sağlar. PMI (Project Management Institute) ve PRINCE2 standartlarına uygun proje yönetim metodolojileri kullanıyoruz. Proje planlama, risk yönetimi, kaynak yönetimi ve proje izleme süreçlerini yapılandırıyor, projelerin başarılı bir şekilde tamamlanmasını garanti altına alıyoruz. Özellikle savunma, teknoloji, yazılım ve mühendislik projelerinde geniş bir tecrübeye sahibiz.

Süreç yönetimi ve iş süreçleri iyileştirme hizmetlerimiz ile işletmelerin verimliliklerini artırmalarını sağlıyoruz. İş süreçlerini analiz ederek darboğazları ve verimsizlikleri belirleriz. Süreçlerin dijitalleştirilmesi, otomasyon çözümleri ve performans iyileştirme teknikleri ile işletmelerin maliyetlerini düşürmelerini ve operasyonel verimliliklerini artırmalarını sağlıyoruz. Süreçlerin sürekli olarak izlenmesi ve iyileştirilmesi için sistemler geliştiriyoruz.

Organizasyonel yapı ve liderlik geliştirme hizmetlerimiz, işletmelerin güçlü ve etkin bir yönetim yapısı oluşturmasını sağlar. Şirketlerin organizasyonel yapılarını analiz eder, yönetim kademelerinin etkinliğini değerlendirir ve liderlik geliştirme programları sunarız. Kurumsal kültür geliştirme, liderlik eğitimi ve yönetici koçluğu ile şirketlerin yönetim kapasitelerini artırırız. Liderlik becerilerini güçlendirerek, şirketlerin daha etkin bir yönetim kültürüne sahip olmalarını sağlıyoruz.

Değişim yönetimi ve dijital dönüşüm süreçlerinde işletmelerin modern iş yapısına uyum sağlamalarını destekliyoruz. Şirketlerin dijitalleşme stratejilerini oluşturur, teknoloji adaptasyonu ve iş süreçlerinin dijitalleştirilmesi konularında rehberlik ederiz. Dijital dönüşüm projelerinde işletmelerin verimliliklerini artırarak, rekabet avantajı elde etmelerini sağlıyoruz.

Pazarlama ve marka yönetimi hizmetlerimiz, markaların güçlü ve tanınır bir konum elde etmelerini sağlar. Müşteri ilişkileri yönetimi, dijital pazarlama, marka bilinirliği ve müşteri bağlılığı stratejileri geliştirerek markaların sürdürülebilir büyüme elde etmelerini destekliyoruz. Pazarlama kampanyalarının planlanması, uygulaması ve izlenmesi süreçlerinde işletmelere stratejik rehberlik sağlıyoruz.

4AK Danışmanlık’in yönetim danışmanlığı hizmetleri, her işletmenin ihtiyaçlarına özel olarak tasarlanır. Müşterilerimizin hedeflerine ulaşmalarını sağlayacak stratejik ve operasyonel çözümler geliştiriyor, bu çözümlerin sahada etkin bir şekilde uygulanmasını sağlıyoruz. İşletmelerin sürdürülebilir büyüme ve rekabet avantajı elde etmeleri için güvenilir bir stratejik iş ortağı olarak yanlarında yer alıyoruz.`,

      intlPageTitle: "Yurtdışı Pazarlama Danışmanlığı",
intlText: `4AK Danışmanlık, işletmelerin küresel pazarlara güvenle ve etkin bir şekilde giriş yapmalarını sağlamak için kapsamlı yurtdışı danışmanlık hizmetleri sunar. Şirketimiz, savunma sanayi, bilişim ve yazılım sektörlerinde faaliyet gösteren küçük ve orta ölçekli işletmelere (KOBİ) uluslararası pazarlarda rekabet avantajı kazandırır. Özellikle Körfez Bölgesi, Orta Asya, Güneydoğu Asya ve Avrupa pazarlarına odaklanarak müşterilerimizin bu bölgelerde güvenilir iş ortakları ve müşteriler ile sürdürülebilir ilişkiler kurmalarını sağlıyoruz.

Yurtdışı danışmanlık hizmetlerimiz, müşterilerimizin hedef pazarlarını belirlemek ve bu pazarlarda etkin bir şekilde faaliyet göstermelerini sağlamakla başlar. Savunma, bilişim ve yazılım sektörlerinde faaliyet gösteren firmaların ürün ve hizmetlerinin doğru hedef kitleye ulaştırılmasını, bu pazarlarda güvenilir iş ortakları ve müşterilerle bağlantılar kurulmasını sağlıyoruz. Müşterilerimize teklif hazırlama, sözleşme müzakereleri ve imzalanması, finansman yönetimi, süreç ve proje yönetimi gibi karmaşık ticari süreçlerde stratejik danışmanlık sağlıyoruz.

Müşteri ve iş ortağı matchmaking hizmetlerimiz ile müşterilerimizi uluslararası pazarlarda güvenilir ve stratejik iş ortakları ile buluşturuyoruz. Güçlü iş ağımız sayesinde, müşterilerimizi doğru distribütörler, tedarikçiler ve iş ortakları ile bir araya getiriyor, işbirliği potansiyeli olan firmaları değerlendiriyor ve müşterilerimizin sürdürülebilir ve güvenilir ortaklıklar kurmalarını destekliyoruz.

4AK Danışmanlık ayrıca, uluslararası projelerde ortaya çıkan ihtiyaçları analiz ederek, uygun çözüm sağlayıcı firmalarla iş birliği sağlıyor. Projelerin hayata geçmesi için gerekli sözleşme ve finansman süreçlerini yönetiyor, uluslararası ihale süreçlerine katılımı destekliyor ve KOBİ’lerin bu süreçlerde etkin rol almasını sağlıyoruz. Bu kapsamda, savunma ve bilişim sektöründe faaliyet gösteren şirketlerin uluslararası pazarlarda etkinliğini ve güvenilirliğini artırıyoruz.

Müşteri ilişkileri yönetimi, uluslararası pazarlarda başarının anahtarıdır. 4AK Danışmanlık, müşterilerimizin yeni pazarlarda müşteri portföylerini güvenli ve sürdürülebilir bir şekilde genişletmelerine yardımcı olur. Yerel pazar dinamiklerine uygun müşteri ilişkileri stratejileri geliştirir, müşteri memnuniyeti ve bağlılığını artırırız.

Uluslararası fuar ve etkinliklere katılım süreçlerini yönetiyor, müşterilerimizin bu etkinliklerde doğru iş ortakları ile tanışmalarını ve yeni iş fırsatları yakalamalarını sağlıyoruz. İş geliştirme faaliyetleri kapsamında, müşterilerimizi potansiyel alıcılarla buluşturuyor ve ticaret görüşmelerinde stratejik destek sunuyoruz.

4AK Danışmanlık olarak, müşterilerimizin küresel pazarlarda güvenle büyümelerini destekliyor ve sürdürülebilir uluslararası başarı elde etmeleri için stratejik bir iş ortağı olarak yanlarında yer alıyoruz. Uzun yıllara dayanan tecrübemiz, güçlü bölgesel bağlantılarımız ve sektörel uzmanlığımız sayesinde müşterilerimizin başarıya ulaşmalarını sağlıyoruz.`,

      aboutPageTitle: "Kurucumuz ve Vizyonumuz",
      founderTitle: "Kurucu Hakkında – Özgeçmiş",
      founderText: `4AK Danışmanlık'in kurucusu, uluslararası iş geliştirme ve strateji alanında 25 yılı aşkın tecrübeye sahip, savunma sanayi, IT, yazılım ve güvenlik sektörlerinde uzmanlaşmış bir liderdir. Kurucu, Türkiye'nin önde gelen savunma ve teknoloji şirketlerinde üst düzey yönetici ve stratejik liderlik pozisyonlarında görev almış, uluslararası pazarlarda ve büyük ölçekli projelerde başarı hikayeleri yazmıştır.<br><br>
Kurucu, uluslararası savunma sanayi projelerinde iş geliştirme ve strateji oluşturma konularında öncü bir rol üstlenmiştir. Özellikle Körfez Bölgesi, Orta Asya ve Güneydoğu Asya gibi stratejik pazarlarda güçlü iş ağları kurmuş ve bu bölgelerde faaliyet gösteren şirketlerin küresel pazarlara girişini desteklemiştir. Türk savunma sanayi şirketlerinin uluslararası alanda tanınmasına katkı sağlamıştır.<br><br>
Kurumlara, yüksek teknolojiye dayalı ürün ve hizmetler geliştirerek uluslararası büyüme hedeflerine ulaşmalarında stratejik danışmanlık sunmuş, teknoloji ve inovasyon odaklı projelere liderlik etmiştir. Havelsan, Meteksan ve benzeri öncü savunma firmalarında üst düzey görevlerde bulunarak ihracat stratejileri geliştirip satış rekorlarının kırılmasına katkı sağlamıştır.<br><br>
Türkiye'nin en hızlı büyüyen girişimlerinden birinin kurucu genel müdür yardımcılığını üstlenmiş, şirketin bölgesel pazarlarda güçlü bir konum elde etmesini sağlamış ve kısa sürede önemli bir büyüme yakalayarak yerel ve uluslararası arenada güçlü bir marka haline gelmesini desteklemiştir.<br><br>
4AK Danışmanlık aracılığıyla savunma sanayi, bilgi teknolojileri, yazılım ve güvenlik alanlarındaki derin bilgisini daha geniş müşteri kitlelerine sunmaktadır. Stratejik düşünme, sonuç odaklılık ve güçlü müzakere becerileriyle müşterilerinin sürdürülebilir büyüme hedeflerine ulaşmalarına yardımcı olmaktadır.<br><br>
Kurucu, iş geliştirme ve strateji alanındaki deneyimiyle işletmelerin uluslararası pazarlara güvenle açılmalarını sağlamak üzere stratejik danışmanlık hizmetleri vermektedir. Stratejik planlama, pazara giriş stratejileri, müşteri ilişkileri yönetimi ve yerel ortaklıklar kurulması gibi kritik alanlarda rehberlik etmektedir.<br><br>
Eğitim ve liderlik alanında da tecrübeye sahiptir. Ankara Üniversitesi ve diğer saygın kurumlarda yıllarca dersler ve seminerler vererek birçok profesyonelin bilgi ve becerilerini geliştirmiştir. Kalite Yönetimi, Proje Yönetimi, Stratejik Yönetim ve Liderlik gibi konularda kapsamlı eğitimler vererek katılımcıların iş dünyasında başarıya ulaşmalarına sağlam bir temel sunmuştur.<br><br>
Kurucunun sektörler arası geniş ağı ve derin bilgisi sayesinde, uluslararası iş geliştirme, stratejik planlama ve proje yönetimi konularında pratik ve uygulanabilir çözümler sunmaktadır. Müşterilerinin büyüme hedeflerine ulaşmalarını sağlarken, uzun vadeli iş ilişkileri ve güvenilir ortaklıklar kurmaya öncelik vermektedir.<br><br>
Bugün 4AK Danışmanlık'in liderliğinde, farklı sektörlerde faaliyet gösteren KOBİ'ler ve büyük ölçekli şirketler için uluslararası pazarlarda başarıya ulaşmayı hedefleyen stratejik çözümler sunulmaktadır. Kurucunun liderliğinde şirket, güvenilirlik, uzmanlık ve müşteri odaklılık değerleriyle güçlü bir iş ortağı olarak konumlanmaktadır.`,
      heroTitle: "For Adding Knowledge (4AK) Danışmanlık",
      introTitle: "4AK Danışmanlık Hakkında",
      introText: `4AK Danışmanlık, 2014 yılında kurulan ve uluslararası pazarlara açılmak isteyen küçük ve orta ölçekli işletmelere (KOBİ) stratejik danışmanlık ve iş geliştirme hizmetleri sunan bir yönetim danışmanlık firmasıdır. Şirketimiz, savunma sanayi, bilgi ve iletişim teknolojileri (IT), yazılım ve güvenlik sektörlerinde kazanılan 25 yılı aşkın uluslararası tecrübenin, işletmelerin büyüme hedeflerine ulaşmalarını desteklemek için stratejik çözümlerle birleştirilmesi vizyonu üzerine kurulmuştur.<br><br>
4AK Danışmanlık olarak, müşterilerimizin yurtdışı pazarlara erişimlerini ve bu pazarlarda sürdürülebilir başarı elde etmelerini sağlıyoruz. Savunma, IT, yazılım ve güvenlik sektörlerinde faaliyet gösteren firmaların hedef pazarlara giriş stratejilerini oluşturarak ve bu pazarlara erişimlerini kolaylaştırarak, uluslararası pazarlarda güvenilir iş ortakları ve müşteriler ile bağlantılar kurmalarını destekliyoruz. Ayrıca, teklif hazırlama, ihale süreçleri ve sözleşme yönetimi gibi karmaşık ticari süreçlerde stratejik danışmanlık sağlarken, şirketlerin uluslararası operasyonlarını optimize etmeleri için süreç ve proje yönetimi hizmetleri sunuyoruz.<br><br>
Özellikle Körfez, Orta Asya, Güneydoğu Asya ve Avrupa pazarlarına odaklanan 4AK Danışmanlık, bu bölgelerdeki yerel iş kültürünü ve düzenleyici gereksinimleri yakından takip ederek, müşterilerimizin küresel pazarlarda güvenle ve etkin bir şekilde büyümelerini sağlayacak stratejik çözümler sunar.<br><br>
4AK Danışmanlık, sadece uluslararası pazarlara erişimi sağlamakla kalmaz, aynı zamanda işletmelerin iç yapısını ve yönetim süreçlerini güçlendirmek için de danışmanlık hizmetleri sunar. Yönetim danışmanlığı alanında, stratejik planlama, kurumsal performans yönetimi, proje yönetimi ve süreç optimizasyonu gibi alanlarda işletmelere çözümler sunuyoruz. İşletmelerin büyüme hedeflerine ulaşmalarını sağlamak için kurumsal yapılarının verimli ve esnek olmasını destekliyoruz.<br><br>
Franchising danışmanlığı, 4AK Danışmanlık'in bir diğer uzmanlık alanıdır. Özellikle yiyecek ve içecek sektöründe faaliyet gösteren markalara pazara giriş stratejileri, franchise modeli geliştirme, operasyon yönetimi ve marka yönetimi konularında stratejik destek sağlıyoruz. Franchising modeli ile büyümek isteyen markaların sürdürülebilir ve kârlı bir franchise ağı oluşturmalarına yardımcı oluyoruz.<br><br>
Şirketimizin yaklaşımı, her müşterimizin ihtiyaçlarına ve hedeflerine özel olarak tasarlanan çözümler sunmaktır. Müşterilerimizin güçlü ve sürdürülebilir büyüme elde etmeleri için sektörel bilgi birikimimizi ve uluslararası deneyimimizi kullanıyoruz. Her projeyi, müşterilerimizin stratejik hedeflerine uygun bir şekilde planlıyor ve uyguluyoruz.<br><br>
Geniş uluslararası ağımız ve bölgesel tecrübemiz ile müşterilerimizin küresel pazarlarda güvenle büyümelerini sağlıyoruz. İş ortaklarımız ile kurduğumuz güvenilir ilişkiler sayesinde, müşterilerimize yeni pazarlara erişim, iş geliştirme ve ticaret süreçlerinde pratik ve sürdürülebilir çözümler sunuyoruz. İşbirliği yaptığımız her müşteriyi bir iş ortağı olarak görüyor ve onların başarısını kendi başarımız olarak kabul ediyoruz.<br><br>
4AK Danışmanlık, esnek ve müşteri odaklı yaklaşımı ile fark yaratır. Stratejik düşünme, sonuç odaklılık ve operasyonel mükemmeliyet ilkeleri ile müşterilerimize hizmet veriyoruz. Her müşteri için özelleştirilmiş çözümler geliştiriyor ve stratejilerin sahada etkin bir şekilde uygulanmasını sağlıyoruz.<br><br>
Kurucumuzun liderliğinde, 4AK Danışmanlık, müşterilerimizin iş geliştirme süreçlerini yönetirken esnek ve müşteri odaklı bir yaklaşım benimser. Uzun vadeli iş ilişkileri kurmaya ve müşterilerimize güvenilir bir stratejik ortak olmaya odaklanıyoruz.<br><br>
Uluslararası deneyimimiz, güçlü iş ağımız ve sektör bilgimiz sayesinde, müşterilerimizin küresel pazarlarda karşılaşabilecekleri tüm zorluklara yönelik pratik ve sürdürülebilir çözümler sunuyoruz. Müşterilerimize yalnızca danışmanlık yapmakla kalmıyor, aynı zamanda stratejilerin sahada uygulanmasını ve sonuçların izlenmesini sağlıyoruz.<br><br>
4AK Danışmanlık, her işletmenin farklı ihtiyaçlara sahip olduğunun bilinciyle, özelleştirilmiş danışmanlık hizmetleri sunar. Sektörel uzmanlığımız ve uygulamaya dönük yaklaşımımız ile müşterilerimizin küresel büyüme hedeflerine güvenle ulaşmalarını sağlıyoruz.<br><br>
Şirketimizin temel değerleri, dürüstlük, şeffaflık ve müşteri memnuniyetidir. İşimizi, müşterilerimizin başarısı üzerine inşa ediyor ve onların büyüme yolculuğunda güvenilir bir iş ortağı olarak yanlarında yer alıyoruz.<br><br>
4AK Danışmanlık, müşterilerine stratejik danışmanlık, yönetim danışmanlığı, franchising ve eğitim hizmetleri sunarak iş dünyasında güvenilir bir iş ortağı olarak konumlanmaktadır. Sorularınızı yanıtlamak ve projelerinizde nasıl destek olabileceğimizi paylaşmak için bizimle iletişime geçmekten çekinmeyin.<br><br>
Müşterilerimize özel, pratik ve sürdürülebilir çözümler sunuyor, iş hedeflerine ulaşmalarını destekliyoruz. Bize ulaşın, işletmenizin büyüme yolculuğunda size nasıl yardımcı olabileceğimizi birlikte keşfedelim.`
 }
  };

  const elements = document.querySelectorAll("[data-key]");
  elements.forEach(el => {
    const key = el.getAttribute("data-key");
if (translations[lang][key]) {
  const value = translations[lang][key];
  if (
    key === "founderText" ||
    key === "introText" ||
    key === "educationText" ||
    key === "intlText" ||
    key === "managementText" ||
    key === "franchisingText"
  ) {
    el.innerHTML = value;
  } else {
    el.textContent = value;
  }
}

  });
}
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en";
  changeLanguage(savedLang);
});
