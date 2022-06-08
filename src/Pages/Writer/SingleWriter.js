import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import {useState, useEffect} from "react";
import behbudiy from "../../images/writer/Behbudiy.jpeg";
import cholpon from "../../images/writer/cho'lpon.jpeg";
import zulfiya from "../../images/writer/zulfiya.jpeg";
import arkad from "../../images/writer/arkad.jpeg";
import berdaq from "../../images/writer/berdaq.jpeg";
import furqat from "../../images/writer/furqat.jpeg";
import gulom from "../../images/writer/gulom.jpeg";
import maqsud from "../../images/writer/maqsud.jpeg";
import muqimiy from "../../images/writer/muqimiy.jpeg";
import muhammad from "../../images/writer/muhammad.jpeg";
import navoi from "../../images/writer/navoi.jpeg";
import ogahiy from "../../images/writer/ogahiy.jpeg";
import olimjon from "../../images/writer/olimjon.jpeg";
import oripov from "../../images/writer/oripov.jpeg";
import oybek from "../../images/writer/oybek.jpeg";
import ozod from "../../images/writer/ozod.jpeg";
import qayib from "../../images/writer/qayib.jpeg";
import qahhor from "../../images/writer/qahhor.jpeg";
import qodiriy from "../../images/writer/qodiriy.jpeg";
import said from "../../images/writer/said.jpeg";
import vohidov from "../../images/writer/vohidov.jpeg";
import yusupov from "../../images/writer/yusupov.jpeg";
import yusuf from "../../images/writer/yusuf.jpeg";
import Header from "../../components/Header";
import SwiperNews from "./SwiperNews";


function Writer() {
    const books = [
        {
            id: 1,
            file_path: behbudiy,
            name: 'Mahmudxoʻja Behbudiy (1875–1919)',
            short_info: 'Mahmudxoʻja Behbudiy (Kirill alifbosida: Маҳмудхўжа Беҳбудий; Arab alifbosida: محمود خواجه بهبودی‎; Toʻliq oti -' +
                ' Mahmudxoʻja Behbudiy ibn Behbudxoʻja) (20-Yanvar 1875 Samarqand — 25-Mart 1919 Qarshi) dramaturg, noshir, din va jamoat arbobi, ' +
                'jadidchilik harakati yetakchilaridan biri. U Yassaviy avlodidan. 18 yoshidan qozixonada mirzalik qiladi, qozi, mufti darajasiga koʻtariladi. ' +
                'Behbudiy haj safarida boʻlgan chogʻida Arabiston, Misr, Turkiyani kezib chiqqan (1899–1900). Sayohat davomida yangi maktab (usuli jadid) ochish fikri ' +
                'mustahkamlanib bordi. Samarqand yaqinidagi Halvoyi qishlogʻida Ajziy, Rajabaminda Abdulqodir Shakuriylar bilan hamkorlikda yangi maktab ochadi. Mahmudxoʻja Behbudiy XX asr boʻsagʻasidaga Turkiston ijtimoiy-siyosiy harakatchiligining eng yirik namoyandasi, yangi davr oʻzbek madaniyatining asoschisidir. Turkiston jadidlarining tan olingan rahnamosi, mustaqil jumhuriyat gʻoyasining yalovbardori, yangi maktab gʻoyasining nazariyotchisi va amaliyotchisi, oʻzbek dramaturgiyasini boshlab bergan birinchi dramaturg, teatrchi, noshir, jurnalist. U tariximizning gʻoyat ogʻir va murakkab bir davrida yashadi. XVI asrdan boshlangan inqiroz va turgʻunlik, oʻzaro janjal, mahalliy urugʻchilik nizolari millatni holdan toydirgan, imkondan foydalanib oʻlkani zabt etgan Rusiya zoʻr berib, uni turgʻun va tutqun saqlashga urinardi. Mana shunday bir sharoitda Vatanni butunlay yoʻq boʻlish xavfidan saqlab qolish, avlodlarni erk va ozodlik, mustaqillik ruhida tarbiyalash, maʼrifat va taraqqiyotta boshlash jadidlar nomi bilan tarixga kirgan Behbudiy boshliq fidoyilar zimmasiga tushdi.\n' +
                '\n' +
                'Turkistonda “Usuli jadid”, “Usuli savtiya” nomlari bilan shuhrat topgan yangi maktabni shular tashkil qilib, shular birinchi boʻlib zamonaviy maktab gʻoyasini ilgari surdilar. Ular oʻz hisoblaridan maktablar ochib, yosh avlodni istiklolga tayyorladilar, sheʼr va maqolalar, sahna asarlari orqali milliy ongni shakllantirishga, milliy gʻurur va iftixor tuygʻularini singdirishga urindilar. Rusiya qonunlari imkon bergan darajada Turkiston musulmonlarining shaʼnu shavkatini himoya qildilar, inqilob yillarida esa mustaqillik bayrogʻini baland koʻtardilar.'
        },
        {
            id: 2,
            file_path: cholpon,
            name: 'Choʻlpon (1898–1938)',
            short_info: 'Oʻzbek adabiyotining yorqin namoyandalaridan biri Abdulhamid Sulaymon oʻgʻli Choʻlpon 1898 yilda Andijonning Qatorterak mahallasida savdogar oilasida dunyoga kelgan.\n' +
                '\n' +
                'Taniqli jurnalist va yozuvchi Moʻminjon Muhammadjonov “Turmush urinishlari” kitobida qayd etishicha, Choʻlponning otasi Sulaymonqul Mulla Muhammad Yunus oʻgʻli (1874–1929) oʻz davrining yetuk ziyolisi, maʼrifatparvar kishisi boʻlgan. U “Rasvo” taxallusi bilan sheʼrlar ham yozgan, devon yaratgan.\n' +
                '\n' +
                'Choʻlpon avval eski maktabda, soʻngra madrasalar va rus-tuzem maktabida tahsil olib, arab, fors va rus tillarini mukammal oʻzlashtiradi. Mutolaa yoʻli bilan turk, nemis va ingliz tillarini oʻrganadi. Sharq va Gʻarb ijtimoiy-siyosiy qarashlaridan oziqlanadi. Firdavsiy, Saʼdiy, Hofiz, Umar Xayyom, Alisher Navoiy kabi buyuk soʻz sanʼatkorlari ijodini mehr bilan oʻrganadi. Choʻlpon dunyoqarashi va ijodining shakllanishiga XX asr boshlaridagi jadidchilik harakati katta taʼsir koʻrsatgan. Choʻlponning ijodi 1913–1914 yillardan boshlangan, u avval “Qalandar”, “Mirzaqalandar”, “Andijonlik” va, nihoyat, “Choʻlpon” taxallusi bilan ijod qildi.\n' +
                '\n' +
                'Shoirga “Choʻlpon” taxallusini buyuk maʼrifatparvar istiqlolchi Munavvar qori Abdurashidxonov bergan. Choʻlpon ham shoir, ham nosir, ham dramaturg sifatida oʻz xalqi adabiyoti ravnaqiga salmoqli hissa qoʻshdi. Uning dastlabki asarlari “Sadoi Turkiston”, “Sadoi Fargʻona” kabi mahalliy gazetalarda, shuningdek, Orenburgda chiqadigan “Shoʻro” jurnalida nashr etiladi. Choʻlponning “Ishtirokiyun”, “Turkiston”, “Buxoro axbori” kabi gazetalardagi faoliyati ham uning ijodiy shakllanishida mahorat maktabi boʻlib xizmat qiladi.\n' +
                '\n' +
                'Choʻlpon ocherknavis va publitsist sifatida ham barakali ijod qildi. Bu borada uning, ayniqsa, “Adabiyot nadir?”, “Muhtaram yozuvchilarimizgʻa” kabi maqolalari adabiyotning maqsad va vazifalarini anglashda muhim rol oʻynadi.'
        },
        {
            id: 3,
            file_path: zulfiya,
            name: 'Zulfiya (1915–1996)',
            short_info: 'Oʻzbek xalqining sevimli shoirasi, taniqli jamoat arbobi, Oʻzbekiston xalq shoiri Zulfiya Isroilova 1915 yil 1 martda Toshkentning Oʻqchi mahallasida degrez oilasida tugʻilgan. U xotin-qizlar bilim yurtida oʻqib yurgan vaqtlaridayoq (1931–1934) adabiy toʻgaraklarga qatnashib, sheʼrlar mashq qiladi.\n' +
                '\n' +
                'Zulfiyaning “Men ish qizi” nomli birinchi sheʼri 1931 yil 17 iyulda “Ishchi” gazetasida bosilib chiqdi. “Hayot varaqlari” nomli ilk toʻplami oʻn yetti yoshida nashr etildi (1932).\n' +
                '\n' +
                '1935–1938 yillarda Oʻzbekiston Fanlar akademiyasining Til va adabiyot instituti aspiranturasida tahsil oldi.\n' +
                '\n' +
                '1938–1948 yillarda nashriyotlarda muharrir, boʻlim boshligʻi, 1950–1953 yillarda esa “Oʻzbekiston xotin-qizlari” (hozirgi “Saodat”) jurnalida boʻlim boshligʻi, 1953–1985 yillarda esa bosh muharrir boʻlib ishladi. Zulfiya badiiy-estetik puxta sheʼr-dostonlari bilan Oydin, Muzayyana Alaviya, Xosiyat Tillaxonovalar safiga kirib keldi.' +
                'Zulfiyaning ijodiy kamolotida oʻzbek va rus klassiklari, xalq ogʻzaki ijodiyoti va jahon adabiyoti anʼanalarining roli beqiyos boʻldi.\n' +
                '\n' +
                'Shoira “Temiroy” (1934), “Sheʼrlar” (1939), “Qizlar qoʻshigʻi” (1939) kabi poetik asarlarini ona Vatan va uning dala, choʻllarida mehnat qilayotgan paxtakorlar, traktorchi qizlarning qaynoq hayotlariga bagʻishlaydi. Ayni chogʻda, mazkur toʻplamlardagi sheʼrlari shoiraning mahorat sirlarini egallayotgan davrini xarakterlovchi asarlar sifatida ham muhim edi.' + 'Urush vaqtida “Uni Farhod derdilar” (1943), “Hijron kunlarida” (1944) kabi toʻplamlarining nashr etilishi Zulfiyaning peshqadam shoirlar qatoriga dadil kirib kelayotganligidan dalolat berdi. Bu toʻplamdagi sheʼrlar Vatanga muhabbat, dushmanga nafrat va gʻalabaga ishonch, yorga sadoqat ruhida yaratilgani bilan xarakterlidir.\n'
        },
        {
            id: 4,
            file_path: gulom,
            name: 'Gʻafur Gʻulom (1903–1966)',
            short_info: 'Oʻzbek adabiyotining mashhur namoyandalaridan biri Gʻafur Gʻulom 1903 yil 10 mayda Toshkent shahrining Qoʻrgʻontegi mahallasida tavallud topdi. Toʻqqiz yoshida otasidan, oʻn besh yoshida onasidan yetim qolgan Gʻafur avval eski maktabda, soʻngra rus-tuzem maktabida taʼlim oldi. U oktyabr toʻntarishidan keyingi yillarda muallimlar tayyorlov kursini bitirib, yangi maktablarda oʻqituvchilik qildi.\n' +
                '\n' +
                '1923 yildan bolalar uyida mudir va tarbiyachi, soʻng “Kambagʻal dehqon”, “Qizil Oʻzbekiston”, “Sharq haqiqati” gazetalari tahririyatlarida ishladi. Gazeta uning uchun dorilfunun rolini oʻtadi, xalq hayotini oʻrganish, unga faol aralashish yoʻlida muhim vosita boʻldi. Uning yangilanishlar ruhiga hamohang tantanavor sheʼrlari, oʻtmish sarqitlarini qoralovchi hajviyalari va xalqning kundalik ijodiy mehnatini olqishlovchi asarlaridan jamlangan “Dinamo”, “Tirik qoʻshiqlar” nomli dastlabki sheʼriy toʻplamlari 1931–1932 yillarda chop etildi. Shoir 1930–1935 yillarda “Koʻkan” dostonini, “Toʻy”, “Ikki vasiqa” balladalarini yaratdi. Keyinchalik adib shaxsga sigʻinish taʼsirida yaratilgan ayrim asarlarini qayta koʻrib chiqadi. Baʼzi asarlarini qayta tahrir etib, sheʼrga tabiiylik va hayotiylik bagʻishlaydi.\n' +
                '\n' +
                '30-yillarda Gʻafur Gʻulom hikoya, ocherk, felʼyetonlar qatori “Netay”, “Yodgor”, “Tirilgan murda” kabi qissalarini ham yaratdi. Urush yillarida shoir oʻz ijodining butun haroratini fashist bosqinchilariga qarshi kurashayotgan xalqqa bagʻishladi, uning muqarrar gʻalabasiga ishonch ruhi bilan sugʻorilgan sheʼrlar yaratdi. “Sen yetim emassan”, “Kuzatish”, “Vaqt”, “Sogʻinish” kabi sheʼrlar, publitsistik ocherk va maqolalar yozib, xalqni jang va mehnat gʻalabasiga otlantirdi.',
        },
        {
            id: 5,
            file_path: oripov,
            name: 'Abdulla Oripov (1941–2016)',
            short_info: 'Oʻrta maktabni oltin medal bilan tamomlagandan keyin (1958), hozirgi Oʻzbekiston Milliy universitetning jurnalistika fakultetida oʻqidi (1958–1963), “Sharq yulduzi” jurnalida adabiy xodim, “Yosh gvardiya” va Gʻafur Gʻulom nomidagi Adabiyot va sanʼat nashriyotlarida muharrir, “Yosh gvardiya” dramatik teatrida badiiy boʻlim mudiri, Oʻzbekiston Yozuvchilar uyushmasida maslahatchi, katta adabiy maslahatchi, Abdulla Qodiriy nomidagi Toshkent Davlat Madaniyat institutida oʻrindoshlik boʻyicha oʻqituvchi, “Sharq yulduzi” jurnalida muharrir (1963–1982), Yozuvchilar uyushmasining Toshkent viloyat boʻlimi masʼul kotibi (1982–1983), “Gulxan” jurnali bosh muharriri (1983–1985), Oʻzbekiston Yozuvchilar uyushmasi Rayosati raisining oʻrinbosari (1985–1987), Oʻzbekiston Yozuvchilar uyushmasining kotibi (1987–1989), Oʻzbekiston Respublikasi Mualliflik huquqini himoya qilish davlat agentligi raisi (1989–2007), Oʻzbekiston Yozuvchilar uyushmasining raisi (1995–2009) vazifalarida ishladi. 2009 yildan boshlab esa Oʻzbekiston Yozuvchilar uyushmasining Faxriy raisi. U 1990 yilda Oʻzbekiston Oliy Kengashining, 1995 yilda Oʻzbekiston Respublikasi Oliy Majlisining deputati etib saylangan. Oʻzbekiston Respublikasi Oliy Majlisi senati aʼzosi (2005–2010).'
        },
        {
            id: 6,
            file_path: navoi,
            name: 'Alisher Navoiy (1441-1501)',
            short_info: 'XV asr jahon maʼnaviyatining buyuk siymosi Nizomiddin Mir Alisher Navoiy hijriy 844 yil ramazon oyining 17-kuni (1441 yil 9 fevral) da Hirotda tugʻilgan. Hirot shahri XV asr birinchi yarmida Sohibqiron Amir Temur asos solgan ulugʻ saltanatning ikkinchi poytaxti, Temurning kenja oʻgʻli Shohrux Mirzoning qoʻl ostidagi obod manzillaridan biri edi.\n' +
                '\n' +
                '\n' +
                'Alisher tugʻilgan xonadon Temuriylar saroyiga eskidan yaqin va yurtda muayyan nufuz sohibi edi. Boʻlgʻusi shoirning otasi Gʻiyosiddin Muhammad oʻgʻlining tarbiyasiga jiddiy eʼtibor berdi. Alisherning sheʼriyatdagi ilk ustozi togʻasi Mir Sayyid Qobuliy va Muhammad Ali Gʻaribiylardir. Navoiy “Majolis un-nafois” asarida Qobuliy haqida: “Yaxshi tabʼi bor erdi, turkchada mayli koʻproq erdi…” desa, Gʻaribiy haqida: “Xush muxovara (xushsuhbat) va xushxulq va dardmand yigit erdi. Koʻproq sozlarni yaxshi chalar erdi. Uni va usuli xoʻb erdi. Musiqiy ilmidin ham xabardor erdi…” deydi.'
        },
        {
            id: 8,
            file_path: muhammad,
            name: 'Zahiriddin Muhammad Bobur (1483–1530)\n',
            short_info: 'Zahiriddin Muhammad Bobur oʻrta asr Sharq madaniyati, adabiyoti va sheʼriyatida oʻziga xos oʻrin egallagan adib, shoir, olim boʻlish bilan birga yirik davlat arbobi va sarkarda hamdir. Bobur keng dunyoqarashi va mukammal aql-zakovati bilan Hindistonda Boburiylar sulolasiga asos solib, bu mamlakat tarixida davlat arbobi sifatida nomi qolgan boʻlsa, serjilo oʻzbek tilida yozilgan “Boburnoma” asari bilan jahonning mashhur tarixnavis olimlari qatoridan ham joy oldi. Uning nafis gʻazal va ruboiylari turkiy sheʼriyatining eng nodir durdonalari boʻlib, “Mubayyin” (“Bayon etilgan”), “Xatti Boburiy”, “Harb ishi”, Aruz haqidagi risolalasi esa islom qonunshunosligi, sheʼriyat va til nazariyasi sohalariga munosib hissa boʻlib qoʻshildi.'
        },
        {
            id: 9,
            file_path: furqat,
            name: 'Furqat (1859-1909)',
            short_info: 'XIX asr ikkinchi yarmi va XX asr boshlaridagi oʻzbek xalqchil adabiyotining yirik namoyandasi, maʼrifatparvari, lirik shoiri, otashin publitsisti Zokirjon Furqat Qoʻqon shahrida, Mullo Xolmuhammad oilasida dunyoga kelgan. Boʻlajak shoirning otasi zamonasining ilgʻor fikrli vakillaridan biri sifatida turli bilimlardan yaxshigina xabardor boʻlgan. Mullo Xolmuhammad xususan badiiy adabiyot muxlisi boʻlib, oʻzi ham sheʼriy iqtidor sohibi edi. Zokirjon mahallasidagi maktabda tahsil koʻradi, ayni zamonda otasi yordamida mustaqil mutolaa orqali oʻzbek va fors adabiyotining buyuk namoyandalari merosini, ayniqsa, Alisher Navoiy ijodini chuqur oʻrganadi, forsiy tilni mukammal oʻzlashtiradi. Yosh Zokirjon Navoiy asarlarini shu darajada berilib mutolaa qiladiki, oʻzining guvohligiga koʻra, buyuk shoir hatto uning tushiga ham kiradi va suhbat asnosida sheʼriyatdan imtihon qilib, ijodiy ish uchun “oq fotiha” beradi.'
        },
        {
            id: 10,
            file_path: ogahiy,
            name: 'Muhammad Rizo Ogahiy (1809-1874)',
            short_info: 'Muhammadrizo Erniyozbek oʻgʻli – Ogahiy XIX asr Xorazm adabiy muhitining yirik siymolaridan biri boʻlib, Navoiydan keyin eng “koʻp va xoʻb” sheʼr aytgan shoirlardandir.\n' +
                '\n' +
                'Ogahiy 1809 yil 17 dekabrda Xiva atrofidagi Qiyot qishlogʻida (Hozirgi Ogahiy nomli jamoa xoʻjaligi) dunyoga kelgan.\n' +
                '\n' +
                'Otasi Erniyozbek vafot etgach, yosh qolgan Ogahiyni togʻasi munis oʻz tarbiyasiga oldi. Munis atrofiga toʻplangan ijodkorlar boʻlgʻusi shoir Ogahiy ijodiga katta taʼsir qildi. Ogahiy dastlabki bilimni Munis Xorazmiydan oldi, keyichalik Xiva madrasalarida tahsil koʻrdi. 1829 yil Munis vafot qilgandan keyin Ollohqulixon uning oʻrniga Ogahiyni bosh miroblik vazifasiga tayinlaydi. Shoir xizmat yuzasidan Xorazm vohasining koʻp joylarida boʻlib, dehqonlarni, hunarmandlarni ayanchli hayotini oʻz koʻzi bilan koʻrdi. Bu Ogahiy ijodiga taʼsir etmay qolmadi.'
        },
        {
            id: 11,
            file_path: muqimiy,
            name: 'Muqimiy (1850-1903)',
            short_info: 'Muhammad Aminxoʻja – Muqimiy lirik shoir va zabardast hajvchi sifatida XIX asrning soʻnggi choragi va XX asr boshlaridagi oʻzbek milliy adabiyotining eng yirik namoyandasi sifatida dong taratdi. Markaziy Osiyo, shu jumladan, Oʻzbekiston chor Rossiyasining mustamlakasiga aylantirilgan sharoitda qalam tebratgan Muhammad Aminxoʻja ijodi chin maʼnoda xalqchildir. U ezilgan mehnatkash omma, bechora kosibu hunarmandlar va xonavayron qishloq dehqonlarining otashin kuychisi boʻlib maydonga chiqdi. Mustamlaka tuzumidagi adolatsizlik va zoʻravonlikni, joriy tartib-qoidalarni xalqona uslubda ayovsiz qoralagan shoir oʻlkamiz istiqboliga ishonch bilan qaradi. Uning asarlarida insoniy ishq-muhabbat ulugʻlandi, iymon-eʼtiqod, halollik, saxiylik, pokdomonlik, elparvarlik, doʻstlik, ona tabiat goʻzalliklaridan zavqlanish, visol onlarining lazzatlari va hijron azob-uqubatlari ishonarli lavhalarda juda taʼsirchan ifodalandi.'
        },
        {
            id: 12,
            file_path: berdaq,
            name: 'Berdaq (1827-1900)',
            short_info: 'Berdaq qoraqalpoq xalqining mashhur demokrat shoiridir. U XIX asrda yashab ijod etgan. Shoirning asl ismi Berdimurod Qargʻaboy oʻgʻli boʻlib, Berdaq uning taxallusidir. Mutafakkir toʻgʻrisida maʼlumotlar kam saqlanib qolgan. Uning tarjimai holi va ijodiga oid maʼlumotlarni, asosan, oʻzining asarlarida uchratish mumkin. U Orol dengizining janubida joylashgan Moʻynoq tumanining Oqqalʼa degan joyida dunyoga kelgan. Berdaq oʻn yoshligidayoq otasi Qargʻaboy Boʻronboy oʻgʻli va onasidan ayrilgach, amakisi Qoʻchqorboyning qoʻlida tarbiya koʻra boshlaydi.\n' +
                '\n' +
                'Berdaq oʻn yoshidan ovul maktabiga, maktabni bitirgandan soʻng oʻz bilimini yanada chuqurlashtirish maqsadida oʻsha davrda yirik ilm maskani hisoblangan Qoraqum eshon madrasasida tahsil oldi.'
        },
        {
            id: 13,
            file_path: behbudiy,
            name: 'Mahmudxoʻja Behbudiy (1874–1919)',
            short_info: 'Buyuk maʼrifatparvar alloma, yozuvchi, dramaturg va jamoat arbobi Mahmudxoʻja Behbudiy 1874 yilning 19 yanvarida Samarqand shahrida muftiy oilasida dunyoga keldi. Oiladagi muhit undagi maʼrifat, adabiyot va ijtimoiy hayotga boʻlgan qiziqishning kuchayishiga, isteʼdodining rangin qirralari bilan namoyon boʻlishiga imkon tugʻdirdi.\n' +
                '\n' +
                'Behbudiyning otasi islom huquqshunosligi sohasida zakiy mutaxassis boʻlib, bu borada koʻplab kitoblar, risolalar yaratgan edi. Ushbu omil oʻz navbatida Mahmudxoʻjaga taʼsir oʻtkazmay qolmadi. U keyinchalik bu haqda soʻzlab, maqolalaridan birida otasining “Hidoya”, “Islom huquqiga sharhlar” asarlari oʻz taqdirida katta rol oʻynaganini alohida qayd etgandi.'
        },
        {
            id: 14,
            file_path: zulfiya,
            name: 'Abdulla Avloniy (1878–1934)',
            short_info: 'XX asr oʻzbek milliy maʼrifatparvarligi yoʻnalishining atoqli namoyandasi, isteʼdodli shoir va dramaturg, pedagog, jamoat arbobi Abdulla Avloniy 1878 yil 12 iyulda Toshkentning Oʻqchi mahallasida, hunarmand oilasida dunyoga kelgan. U oʻz tarjimai holida shunday yozadi: “12 yoshimdan Oʻqchi mahallasidagi madrasada dars oʻqiy boshladim. 13 yoshimdan yoz kunlari mardikor ishlab, oilamga yordam qilib, qish kunlari oʻqir edim. 14 yoshimdan oʻsha zamonga muvofiq har xil mavzuda sheʼrlar yoza boshladim. Bu zamonlarda “Tarjimon” gazetasini oʻqib, zamondan xabardor boʻldim”. Avloniy madrasani bitirib, maktabdorlik bilan shugʻullandi. Oʻqish va oʻqitish usuliga isloh kiritib, yangi usuldagi maktab tashkil etdi.'
        },
        {
            id: 15,
            file_path: qodiriy,
            name: 'Abdulla Qodiriy (1894–1938)',
            short_info: 'XX asr oʻzbek milliy adabiyotining yirik namoyandalaridan biri, buyuk romannavis Abdulla Qodiriy 1894 yil 10 aprelda Toshkent shahridagi Eshonguzar mahallasida tugʻilgan.\n' +
                '\n' +
                'Tarjimai holidagi quyidagi soʻzlar yozuvchining 1926 yilga qadar kechgan hayotiga oydinlik kiritadi: “Har holda bemavridroq boʻlsa kerak, kambagʻal, bogʻbonlik bilan kun kechirguvchi bir oilada… tugʻilgʻonman. Yoshim toʻqqiz-oʻnlarga borgʻondan soʻng meni maktabga yubordilar. Maktabda ikki-uch yil chamasi eski usulda oʻqib, keyingi vaqtlarda oilamizning nihoyatda qashshoq kun kechirgani vajhidan oʻn ikki yoshimda meni bir boyga xizmatchilikka berdilar.'
        },
        {
            id: 16,
            file_path: olimjon,
            name: 'Hamid Olimjon (1909–1944)',
            short_info: 'Isteʼdodli shoir, dramaturg, olim va jamoat arbobi Hamid Olimjon 1909 yil 12 dekabrda Jizzax shahrida dunyoga keldi. Narimonov nomidagi boshlangʻich maktabni tugatgach, Samarqand pedagogika bilim yurtida (1923–1926), soʻng pedakademiyada (1926–1931) oʻqidi.\n' +
                '\n' +
                'Hamid Olimjon talabalik yillaridayoq sheʼriyatga qiziqdi. Uning asarlari 1926 yildan “Zarafshon” gazetasida chiqa boshladi. Hamid Olimjonning “Koʻklam” nomli ilk sheʼriy toʻplami 1926 yilda bosilib chiqdi. Shundan soʻng “Olov sochlar” (1931), “Oʻlim yovga” (1932), “Poyga” (1932) kabi sheʼriy toʻplamlari oʻquvchilar qoʻliga tegdi.'
        },
        {
            id: 17,
            file_path: oybek,
            name: 'Oybek (1905–1968)',
            short_info: 'XX asr oʻzbek adabiyotining rivojiga ulkan va bebaho hissa qoʻshgan ulugʻ adib, shoir, olim, jamoat arbobi, Oʻzbekiston xalq yozuvchisi Muso Toshmuhammad oʻgʻli Oybek 1905 yilning 10 yanvarida Toshkent shahrida boʻzchi oilasida dunyoga keldi.\n' +
                '\n' +
                'Oldin oʻrta maktabda, 1922–1925 yillarda esa Toshkent taʼlim va tarbiya texnikumida tahsil oldi. Soʻngra Oʻrta Osiyo Davlat universitetining ijtimoiy fanlar fakultetida oʻqishini davom ettirdi. 1930 yili universitetni tugatib, shu yerda siyosiy iqtisoddan dars berdi.'
        },
        {
            id: 18,
            file_path: maqsud,
            name: 'Maqsud Shayxzoda (1908–1967)',
            short_info: 'Oʻzbek adabiyotining atoqli namoyandalaridan biri, mashhur shoir, zabardast dramaturg, adabiyoshunos olim va tarjimon Maqsud Shayxzoda 1908 yili Ozarbayjonning Oqtosh shahrida tavallud topdi.\n' +
                '\n' +
                'Boshlangʻich va oʻrta maʼlumotni Oqtoshda olgach, Boku Oliy pedagogika institutida sirtdan oʻqidi va 1925 yildan boshlab Darband shahrida muallimlik bilan shugʻullandi.'
        },
        {
            id: 19,
            file_path: qahhor,
            name: 'Abdulla Qahhor (1907–1968)',
            short_info: 'Oʻzbek adabiyoti taraqqiyotiga katta hissa qoʻshgan Abdulla Qahhor 1907 yili Qoʻqon shahrida temirchi oilasida dunyoga keldi. Oʻrta maʼlumotni Qoʻqonda olgan Abdulla 1925 yilda Toshkentga kelib, “Qizil Oʻzbekiston” gazetasida ishlaydi.\n' +
                '\n' +
                'U Oʻrta Osiyo Davlat universitetining pedagogika fakultetida (1930) tahsil oldi. Yozuvchi “Sovet adabiyoti” jurnalida masʼul kotib, Oʻzbekiston Davlat nashriyotida muharrir lavozimlarida ishladi (1954–1956).'
        },
        {
            id: 20,
            file_path: said,
            name: 'Said Ahmad va Saida Zunnunova',
            short_info: 'Oʻzbek nasrining peshqadam arboblaridan biri Said Ahmad (Husanxoʻjayev) 1920 yili Toshkentning Samarqand darvoza mahallasida dunyoga keldi. 1939 yili oʻrta maktabni, 1941 yili esa oliy oʻquv yurtini tugatdi.\n' +
                '\n' +
                'Isteʼdodli shoira, jozibali nasriy asarlar muallifi Saida Zunnunova 1926 yilda Andijon shahrida xizmatchi oilasida dunyoga keldi. Otadan erta yetim qolgan Saida 1941–1943 yillarda Andijon pedagogika institutida tahsil oldi, viloyat maktablarida muallima, gazeta tahririyatlarida adabiy xodim boʻlib ishladi. Saida Zunnunovaning birinchi sheʼri 1945 yili “Paxta fronti” gazetasida bosilgan.'
        },
        {
            id: 21,
            file_path: qayib,
            name: 'Toʻlepbergen Qayipbergenov',
            short_info: '(qoraqalpoqcha: Tólepbergen Qayıpbergenov; 1929.7.5, Qoraqalpogʻiston, Kegeyli tumani — 2010) — Oʻzbekiston (1994) va Qoraqalpogʻiston xalq yozuvchisi (1974). Oʻzbekiston Qahramoni (2003). Xoʻjayli pedagogika bilim yurtini (1947), Qoraqalpogʻiston pedagogika intining rus tili va adabiyoti fakultetini tugatgan (1955). "Amudaryo" jur. (1955—57)da, Qoraqalpogʻiston Yozuvchilar uyushmasida masʼul kotib (1957—58). Qoraqalpogʻiston teleradiokomitetida katta muharrir, rais oʻrinbosari (1958— 59), "Jas leninshi" gaz. bosh muharriri (1959—60), "Qoraqalpogʻiston" nashriyoti direktori, "Sovet Qoraqalpogʻistoni" gaz. bosh muharriri (1962— 72). Qoraqalpogʻiston nashriyot, poligrafiya va kitob savdosi ishlari davlat komiteti boshligʻi (1972-yildan), Qoraqalpogʻiston Yozuvchilar uyushmasi raisi, Oʻzbekiston Yozuvchilar uyushmasi raisining oʻrinbosari (1980-yildan). Dastlabki qissasi — "Sekretar" (1956). "Rahmat, muallim" (1958), "Sovuq tomchi" (1964), "Uyqusiz tunlar" (1965) qissalarining,'
        },
        {
            id: 22,
            file_path: yusupov,
            name: 'Ибройим Юсупов (1929-2008)',
            short_info: 'Ибройим Юсупов (1929–2008) ижоди ХХ асрнинг иккинчи ярми – XXI аср бошларидаги қорақалпоқ адабиёти тарихида ёрқин саҳифани ташкил қилади.\n' +
                'Ибройим Юсупов 1929 йили Чимбой туманидаги Озод қишлоғида таваллуд топди. 1949 йил Қорақалпоқ давлат педагогика институтини битиргач, 1961 йилгача шу олий даргоҳда ўқитувчи бўлиб ишлади. 1961–1962 йилларда “Амударё” журналининг бош муҳаррири, кейинги уч йил мобайнида Нажим Дав-қораев номидаги тил ва адабиёт институтида илмий ходим, 1965–1980 йилларида Қорақалпоғистон Ёзувчилар уюшмасининг раиси, 1980–1988 йилларда “Эркин Қорақалпоғистон” (собиқ “Совет Қорақалпоғистони”) газетасида бош муҳаррир, шунингдек, кейинги йилларда Тинчлик қўмитасининг Қорақалпоғистон бўлимига (1988–1994), Республика Маънавият ва маърифат марказига (1994–2000) раислик қилди.'
        },
        {
            id: 23,
            file_path: vohidov,
            name: 'Erkin Vohidov (1936–2016)',
            short_info: 'Zamonaviy oʻzbek milliy adabiyotining yorqin namoyandalaridan biri Erkin Vohidov 1936 yil 28 dekabrda Fargʻona viloyatining Oltiariq tumanida oʻqituvchi oilasida tugʻildi. Otasi Choʻyanboy Vohidov Ikkinchi jahon urushidan keyin Toshkentga qaytib, tez orada shu yerda vafot etdi. Onasi Roziyaxon Vohidova (Sohiboyeva) ham dunyodan oʻtib, boʻlgʻusi shoir togʻasi Karimboy Sohiboyev tarbiyasida qoldi.\n' +
                '\n' +
                'Erkin Vohidov Toshkent davlat universitetining filologiya fakultetida tahsil olib, “Yosh gvardiya”, Gʻafur Gʻulom nomidagi nashriyotlarda, “Yoshlik” jurnalida xizmat qildi. Mustaqillik yillarida Oʻzbekiston Respublikasi Oliy Majlisining Xalqaro aloqalar va munosabatlar qoʻmitasi rahbari, Oʻzbekiston Senati aʼzosi sifatida faoliyat yuritdi.'
        },
        {
            id: 24,
            file_path: ozod,
            name: 'Озод Шарафиддинов (1929 - 2005)',
            short_info: 'Zamonaviy milliy ziyolilarning jasur va faol, hozirjavob vakillaridan biri hisoblangan Ozod Sharafiddinov atoqli olim, murabbiy, publitsist va tarjimon sifatida mashhurdir. U ilmiy faoliyatida o‘z­bek filologiyasining dolzarb mavzularida qalam tebratdi. Jumladan, poeziya muammolari bilan shug‘ullandi, o‘zbek she’riyati haqida adabiy-tanqidiy maqolalar yozdi. O‘sha davrdagi ilmiy-ijodiy, adabiy-tanqidiy izlanishlari “Zamon. Qalb. Poeziya” (1962) asarida o‘z aksini topgan. XX asrning 60-80-yillarida Cho‘lpon hayoti va ijodini targ‘ib qilishga intildi.'
        },
        {
            id: 25,
            file_path: arkad,
            name: 'Faynberg Aleksandr Arkadevich',
            short_info: 'Aleksandr Faynberg Arkadevich - rus shoiri, O‘zbekiston xalq shoiri. O‘zbekiston shoirlar osmonida Aleksandr Faynberg, shubhasiz, eng yorqin yulduzlardan biridir. Uning ijodi o‘ta serqirra. U Toshkent, Moskva hamda Sankt Peterburg shaharlarida chop etilgan  to‘plamlar muallifi. Uning qalamiga badiiy filmlarning senaryilari mansub. Rossiya Prezidentining farmoni bilan O‘zbekiston shoiri Aleksandr Arkadevich Faynberg 2008 yil Pushkin medali bilan taqdirlangan.\n' +
                '\n' +
                'Aleksandr Arkadevich Faynberg 1939 yil 2-noyabr kuni Toshkentda - ota onasi 1937 yil Novosibirskka ko‘chib kelgandan so‘ng tug‘ilgan.'
        },
        {
            id: 26,
            file_path: yusuf,
            name: 'Muhammad Yusuf (1954–2001)',
            short_info: 'Oʻzbekiston xalq shoiri Muhammad Yusuf 1954 yil 26 aprelda Andijon viloyati, Marhamat tumanidagi Qovunchi qishlogʻida dehqon oilasida tavallud topdi. Toshkentdagi Rus tili va adabiyoti institutida (hozirgi Jahon tillari universiteti) tahsil oldi. Respublika Kitobsevarlar jamiyatida, “Toshkent oqshomi” gazetasida, Gʻafur Gʻulom nomidagi Adabiyot va sanʼat nashriyotida, “Tafakkur” jurnalida, “Oʻzbekiston ovozi” gazetasida xizmat qildi. Oʻzbekiston Prezidenti huzuridagi Davlat va jamiyat qurilish Akademiyasida tahsil olgach, 1998 yildan umrining oxirigacha Oʻzbekiston Yozuvchilar uyushmasida faoliyat yuritdi.'
        }
    ]


    const [current, setCurrent] = useState()

    useEffect(() => {
        books.forEach(book => {
            if (book.id == localStorage.getItem('currentWriter')) {
                setCurrent(book)
                return
            }
        })
    }, [])


    return (
        current ? <div>
            <Header/>
            <Toolbar/>
            <div className="row p-5">
                <div className="col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6">
                    <Card>
                        <CardMedia
                            component="img"
                            image={current.file_path}
                            alt="green iguana"
                            className='w-100 h-100'/>
                    </Card>
                </div>
                <div className="col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6">
                    <CardContent className='text-center'>
                        <Typography gutterBottom variant="h6" component="div">
                            {current.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {current.short_info}
                        </Typography>
                    </CardContent>
                </div>
            </div>
            <SwiperNews writer={current}/>
        </div> : ''
    );
}

export default Writer;
