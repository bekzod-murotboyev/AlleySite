import React from "react";
import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    styled,
    Typography,
} from "@mui/material";
import news1 from '../../../images/news/news1.jpeg'
import news2 from '../../../images/news/news2.jpeg'
import news3 from '../../../images/news/news3.jpeg'
import news4 from '../../../images/news/news4.jpeg'
import news5 from '../../../images/news/news5.jpeg'
import news6 from '../../../images/news/news6.jpeg'
import news7 from '../../../images/news/news7.jpeg'
import news8 from '../../../images/news/news8.jpeg'
import news9 from '../../../images/news/news9.jpeg'
import {NavLink} from "react-router-dom";

const Item = styled(Box)(({theme}) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

function WriterCard({writer}) {

    function changeDirection(item) {
        localStorage.setItem('currentNews', item.id)
    }

    const books = [
        {
            id:1,
            file_path:news1,
            info:'Til bilgan – el biladi\n' +
                'Til bilgan – el biladi\n' +
                'xasan\n' +
                ' Yangiliklar\n' +
                ' 04 November 2020\n' +
                'Davlatimiz rahbari 1-oktabr – O‘qituvchi va murabbiylar kuni munosabati bilan o‘tkazilgan uchrashuvda Vatan istiqloli, xalqimizning ozodligi va erkinligini ta’minlash yo‘lida fidokorlik ko‘rsatgan Abdulla Avloniy, Munavvarqori Abdurashidxonov kabi ma’rifatparvar ajdodlarimiz qatori Mahmudxo‘ja Behbudiyni ham “Buyuk xizmatlari uchun” ordeni bilan taqdirlagani alloma shaxsiyatini yuqori bosqichga olib chiqdi. Qolaversa, Prezidentimizning Alisher Navoiy nomidagi O‘zbekiston Milliy bog‘ida barpo etilgan Adiblar xiyoboniga qilgan tashrifidan so‘ng yoshlar orasida buyuk mutafakkirlarning hayoti va ijodini chuqur o‘rganish, ular tomonidan qoldirilgan ilmiy-ma’naviy merosga bo‘lgan qiziqish yanada ortdi.\n— Bugungi uchrashuvda Mahmudxo‘ja Behbudiyning “Ikki emas, to‘rt til lozim” maqolasining mazmun-mohiyatini o‘quvchi-yoshlarga yetkazishga harakat qildik, — deydi filologiya fanlari nomzodi Malika Nosirova. — Maqolada allomaning vatanparvarligi yaqqol namoyon bo‘lib, yoshlarni xorijiy tillarni o‘rganishga undaydi. Dunyoviy bilimlarini oshirishlari kerakligini ta’kidlaydi. Allomaning bu maqolasi zamiridagi ezgu istak va bunyodkor g‘oyani kuni kecha Davlatimiz rahbari 1-oktabr – O‘qituvchi va murabbiylar kunidagi ma’ruzalarida ham ta’kidlab o‘tdilar. Ular o‘zbek ziyolilari, yoshlari oldiga ulkan vazifa — Uchinchi Renessans poydevorini yaratishni qo‘ydilar. Buning uchun esa dunyo ilm-fani, olib borilayotgan tadqiqotlardan boxabar bo‘lishimiz talab etiladi.\n' +
                '\n' +
                'Uchrashuv yakunida talaba-yoshlar tomonidan alloma faoliyati to‘g‘risida savollar berildi. Ma’ruzachilar o‘quvchilarni qiziqtirgan savollariga javob berib, tadbirni yanada qiziqarli sur’atda o‘tishini ta’minladi. Faol yoshlar Mahmudxo‘ja Behbudiyning hayoti va ijodi aks etgan kitoblar bilan taqdirlandi.\n' +
                '\n' +
                'O‘zbekiston xalqaro islom akademiyasi\n' +
                '\n' +
                'Matbuot xizmati'
        },
        {
            id:2,
            file_path:news2,
            info:'Маърифатпарвар адибимизни ёд этиб...\n' +
                'xasan\n' +
                ' Dolzarb masalalar\n' +
                ' 28 August 2020\n' +
                'Бугунги кунда адабий меросимизни ўрганиш, тарихимизни холисона ёритиш орқали ўсиб келаётган ёш авлодга бу — бой хазинанинг қадри нақадар улуғлигини етказиш муҳим вазифалардан бири. Унда ҳар бир маърифатпарварнинг ўз ҳақиқати ва бунёдкор ғоялари мавжуд бўлиб, бундан баҳраманд бўлиш, маънавий озуқа олиш, илгари сурган ибратли фикрлари руҳиятимизга куч-қувват бағишлаши табиий. Ана шундай илмий-маънавий мероси билан бизга ибрат бўлган, халқимиз, қолаверса, ёшларга катта маърифий мерос қолдирган адибларимиздан бири — буюк маърифатпарвар Маҳмудхўжа Беҳбудийдир.\n' +
                '\n' +
                'Маҳмудхўжа Беҳбудий – аллома, ёзувчи, жамоат арбоби ва ўзбек драматургияси асосчиси. Бутун ҳаётини эл-юрт хизматига сарфлаган бу инсон кенг қиррали шахс бўлган. У Туркистонда биринчилар қатори “Усули – жадид” – янгича таълим методига асосланган мактабларни ташкил этгани манбаларда ёзиб қолдирилган. Айниқса, ўқувчилар учун дастлабки дарслик ва ўқув қўлланмаларни ҳам ўзи ёзган эди. Шунинг билан бирга, у биринчи ўзбек драмасининг муаллифи ҳамдир.\n' +
                '\n' +
                'Давлатимиз раҳбари Шавкат Мирзиёев Олий Мажлисга қилган Мурожаатномасида шу йил мамлакатимизда Маҳмудхўжа Беҳбудий таваллудининг 145 йиллигини кенг нишонланишига алоҳида тўхталиб ўтган эди. Албатта, бу улуғ инсоннинг бой маънавий меросини ўрганиш халқимиз маърифатини юксалишида муҳим аҳамиятга эга. Унинг ўз даври муаммоларидан келиб чиқиб, куйиниб, халқни эзгуликка чорлаб ёзган маънавий мероси ҳозирги кун учун ҳам қанчалик монанд келишини англаяпмиз. Масалан, тўй ва таъзияга сарф қилинадиган маблағни илмга сарфланишни айтади. Ёки фарзандларни тарбияси қандай оналар қўлига қолдирмоқдамиз, дея хитоб уриб ёзганини эслаш ўринли.\n' +
                '\n' +
                'Ҳа, тўй мавзуси – ҳозир ҳам долзарб. Халқимизга хос бир одат бор: қиз туғилса, сеп йиға бошланади. Фарзанд ўғил бўлса, тўйга тайёргарлик бошлаб юборилади. Бу ишнинг яхши ва ёмон томони бор. Ёмон томони – эътибор қилинса, тарбия мақсад қилинмаяпти. Вақти келиб “мода”си ўтадиган, сандиқда эскирадиган сеп, сарпою одамлар еб, раҳматини унутадиган тўй учун аталган маблағнинг таълим, тарбия йўлига мақсадли сарфланиши тўғри, оқилона бўлишини ҳар ким англайди. Аммо...\n' +
                '\n' +
                'Баҳонамиз кўп — “орзу-ҳавасим бор”, “умримда бир марта бўлса...”, “бошқалардан кам эмасман”... Эҳ-ҳээ, буларнинг давоми узун. Шунда ҳам мақсад бир – йиққанини сарф қилиш. Керак бўлса, қарз қилиб бўлса ҳам. Кейин бир гап бўлар. Ахир, “қарз узилади...”.\n' +
                '\n'
        },
        {
            id:3,
            file_path:news3,
            info:'Spektaklning ikkinchi sahnasi ifoda vositalari yordamida o‘ta fojiali tarzda tasvirlangan. Bu sahnada boyning o‘g‘li Toshmurod otasining bergan pullari har qancha ko‘p bo‘lsa ham uning kayfu safosiga yetmagani sababli jinoyatchiga aylanishi hikoya qilinadi. Qahvaxonada ichkilik ichib, mast-alas, takasaltang o‘smirlar Toshmurodga o‘z otasining pulini o‘g‘irlashni maslahat beradilar.\n' +
                '\n' +
                'Qahvaxona ko‘rinishidan so‘ng voqealar boyning hovlisiga ko‘chadi. Boy supada xurrak otib uxlab yotibdi. Bu holatni Abdulla Avloniy juda ishonarli ijro etadi. Toshmurod — Badriddin A’lamov uyga pusib kirib, Tangriqulga uy eshigini ochib beradi. Tangriqul rolini Shoh Inoyatov ijro etgan. U qo‘lida kalit, har ehtimolga qarshi temir asbob va pichoq bilan qurollangan. U asta yurib borib, sandiqni buza boshlaydi. Shu payt boy uyqudan uyg‘onib, dod sola boshlaydi. Qo‘liga tayoqni olib Tangriqulga tashlanadi. Voqeaning bunday tus olishini kutmagan Toshmurod bilan Tangriqul olishish jarayonida uni pichoqlab qo‘yadi. Ular pulni oladilar va Toshmurod otasini shu ahvolida tashlab, qahvaxonaga shoshiladi.\n' +
                '\n' +
                'Ana shunday sahnani va kechayotgan voqealarni ko‘rgan tomoshabin farzandi tomonidan o‘ldirilgan boyning ahvoliga achinmaydi, balki bu voqeaning sababchisi uning o‘zi ekanini anglab etadi.\n' +
                '\n' +
                'Sahna asarida bir to‘da boyvachchalar, qahvaxona xo‘jayini Artur va Lizaning o‘ta past, tuban kimsalar ekani yorqin ochib berilgan. Ana shunday jazavaga tushgan to‘da polisiya tomonidan qo‘lga olinadi.\n' +
                '\n' +
                'Asar muallifi Mahmudxo‘ja Behbudiy va spektakl ijodkorlari o‘sha davrning bir qator katta muammolarini ko‘tarib chiqqanlar. Shulardan biri Turkistonni mustamlakaga aylantirganlar ta’sirida yomon illatlar ham kirib kelgani ko‘rsatib berilgan.\n' +
                '\nO‘sha davr matbuotiga asoslangan holda to‘la ishonch bilan aytamizki, spektakl juda katta muvaffaqiyat qozondi. “Oyina” jurnalining 1914 yil 22 mart sonida Fuzoil Joniboyevning “Toshkentda milliy teatr” nomli maqolasi e’lon qilinadi. Unda aktyorlar o‘z rollarini muvaffaqiyatli ijro etganlari, ayniqsa, A.Avloniy ijrosidagi boy obrazi to‘laqonli gavdalantirilgani ta’kidlab o‘tiladi. Shuningdek, “Turkiston viloyati gazetasi” ham spektaklga munosib baho beradi.\n'
        },
        {
            id:4,
            file_path:news4,
            info:'1915-yilda Behbudiy “sart” masalasiga qaytib, “Oyna” jurnalining bir necha sonlarida “Sart so‘zi majhuldir” degan nom ostida turkum maqolalar chop etadi. Mazkur maqolalarda mutafakkirning tarix va tilshunoslikni chuqur bilishi yaqqol namoyon bo‘ladi. Yakunda mutafakkir 13 banddan iborat ilmiy asoslarni bayon qiladi va ularga “Sho‘ro” jurnalida bosilgan Baqoxo‘ja Samarqandiyning 9 ilmiy asosini qo‘shadi. “Sart so‘zi majhuldir” maqolasini o‘qigan kishi Mahmudxo‘ja Behbudiyning bir necha tilda yozilgan manbalardan mohirlik bilan foydalanganiga guvoh bo‘ladi. Maqolada bir necha asrlik tarix tilga kiradi.\n' +
                '\n' +
                'Mazkur maqolalar orasida ona tili muammolariga bag‘ishlangan va  chuqur tahliliy xulosalari bilan yaqqol ajralib turadigani, shubhasiz, “Til masalasi” maqolasi hisoblanadi.\n' +
                '\n' +
                'Mahmudxo‘ja Behbudiy “Til masalasi” maqolasini “Oyna” jurnalining ikki sonida chop ettiradi. Maqolada XX asr boshida Turkiston o‘lkasida ona tilining holati, asrlar davomida fors va  arab tillarining unga ta’sir etgani, turkiy tilning asliyatini saqlash va bu borada chuqur o‘ylangan va uzoq muddatli ishlar olib borish lozimligi kabi masalalar atroflicha tahlil qilingan.\n' +
                '\n' +
                'Mahmudxo‘ja Behbudiyning serqirra va sermazmun merosi, unda ko‘tarilgan dolzarb masalalar mana necha asr o‘tibdiki hali hanuz o‘z ahamiyatini yo‘qotgani yo‘q. Uni o‘rganish, allomaning orzu-armonlarini ro‘yobga chiqarish biz avlodlarning tarixiy mas’uliyatidir.\n' +
                '\n' +
                'Saidafzal SAIDJALOLOV,\n' +
                '\n' +
                'O‘zbekiston xalqaro islom akademiyasi\n' +
                '\n' +
                '“Islomshunoslik va islom sivilizatsiyasini\n' +
                '\n' +
                ' o‘rganish ICESCO” kafedrasi katta o‘qituvchisi.'
        },
        {
            id:5,
            file_path:news5,
            info:'BARHAYOT GʻOYALAR\n' +
                'BARHAYOT GʻOYALAR\n' +
                'Super User\n' +
                ' Hot trend\n' +
                ' 09 January 2019\n' +
                'Маҳмудхўжа Беҳбудий – аллома, ёзувчи, жамоат арбоби ва ўзбек драматургияси асосчиси. Бутун ҳаётини эл-юрт хизматига сарфлаган маърифатпарвар кенг қиррали шахс эди. У Туркистонда биринчилар қатори “Усули жадид” – янгича таълим методига асосланган мактабларни ташкил этган. Ўқувчилар учун дастлабки дарслик ва ўқув қўлланмаларни ҳам ўзи ёзган. Биринчи ўзбек драмасининг муаллифи ҳамдир.\n' +
                '\n' +
                'Ўзбекистон халқаро ислом академияси ҳамда Республика Маънавият ва маърифат маркази ҳамкорлигида Адиблар хиёбонида ўзбек адабиётининг буюк намоёндаси Маҳмудхўжа Беҳбудийнинг ҳаёти ва ижодига бағишлаб “Беҳбудий ва барҳаёт ғоялар” мавзусида маънавий-маърифий тадбир ўтказилди.\n' +
                '\n' +
                'Унда Ўзбекистон халқаро ислом академияси профессор-ўқитувчилари, Республика Маънавият ва маърифат маркази масъул ходимлари, Академия  Ёшлар билан ишлаш, маънавият ва маърифат бўлими бошлиғи М.Қаҳҳорова, “Мумтоз Шарқ филологияси” факультети декани И.Мирзиётов, “Араб тили ва адабиёти ал-Азҳар” ва “Ўзбек тили ва мумтоз шарқ адабиёти” кафедралари профессор-ўқитувчилари ҳамда талабалар иштирок этди.\n' +
                '\n' +
                'Тадбирда Маҳмудхўжа Беҳбудий ҳаёти ва ижоди, ижтимоий-сиёсий муҳит ривожига қўшган ҳиссаси ва халқаро ҳамкорлик борасидаги ютуқлари, диний ва дунёвий салоҳияти, муфтийлик фаолияти ва ҳаж сафари, ўзбек адабиёти ва матбуотига қўшган ҳиссаси, маърифатпарвар ижодини ўрганиш борасидаги илмий тадқиқотлар ҳақида ўқитувчилар томонидан талабаларга сабоқ берилди.\n' +
                '\n' +
                'Шунингдек, талабалар ижро этилган саҳна кўринишларида маърифатпарвар ижоди акс этган чиқишлар намойиш этилди. Беҳбудий асарларидан парча ўқилди.\n' +
                '\n' +
                '— Беҳбудий адабиёт, тарих фанлари билан бирга сиёсатни ҳам ўрганади, — дейди  “Мумтоз Шарқ филологияси” факультети декани И.Мирзиётов. — Газета ва журналлар орқали дунёда содир бўлаётган янгиликлар билан танишиб борган. Макка, Миср ҳамда кўплаб давлатларга қилган саёҳатлари унинг дунёқарашини бутунлай ўзгартириб юборган. У мактаб ва санъатни яхшилаш масалаларига бағишланган қатор мақолалари газета ва журналларда доимий равишда чоп этилган.\n'
        },
        {
            id:6,
            file_path:news6,
            info:'Беҳбудий ҳаёти ва ижоди, илмий-маънавий бой меросини ўрганиш олимлар, адабиётшунослар ўртасида бошланиб кетди. Жумладан, Ўзбекистонда Б.Қосимов, Ҳ.Сайид, Н.Авазов, З.Аҳророва, Тожикистонда Р.Ходизода, Германияда И.Балдауф (Ўзбекистонлик Б.Қосимов билан ҳамкорликда), АҚШда Э.Олворт, Эронда Ҳусейнпур Акрам каби қатор мамлакатларнинг олимлари Беҳбудий ҳаёти ва ижоди бўйича илмий-тадқиқот ишларини олиб боришди. Пойтахтимиздаги кўплаб шаҳар ва кўчалар, мактабларга Маҳмудхўжа Беҳбудий номи қўйилди.\n' +
                '\n' +
                'Бугун Беҳбудий сингари маърифатпарвар жадид боболаримиз муқаддас тутган юрт озод ва мустақил бўлди. Улар томонидан аждодларимиз амал қилиб келган асрий анъаналар, урф-одатлар, миллий маданий ва маънавий ўзлик бизгача безавол етиб келди. Албатта, биз жадид боболаримизга муносиб ворислар бўлиб, улар тутган эзгулик ва ўз миллий юксалиш йўлимиздан адашмай боришимиз зарур.\n' +
                '\n' +
                'Наргиза ШОАЛИЕВА,\n' +
                '\n' +
                'Ўзбекистон халқаро ислом академияси\n' +
                '\n' +
                '“Ўзбек тили ва мумтоз Шарқ адабиёти”\n' +
                '\n' +
                'кафедраси катта ўқитувчиси,\n' +
                '\n' +
                'филология фанлари номзоди'
        },
        {
            id:7,
            file_path:news7,
            info:'Jumladan, “Muhtaram yoshlarg‘a murojaat” nomli maqolasida muallif shunday xitob qiladi: “Muhtaram birodarlar! Barchamizga oftob kabi ravshan va ayondurki, makotib — taraqqiyning boshlang‘ichi, madaniyat va saodatning darvozasidur. Har millat eng avval, makotibi ibtidoiysini zamoncha isloh etib ko‘payturmaguncha taraqqiy yo‘lig‘a kirub madaniyatdan foydalanmas. Madaniyati hoziradan mahrum qolub, sanoye’ va maorif salohi ila qurollanmagan millat esa, dunyoda rohat va saodat yuzini ko‘rolmas. “Muborizai hayot” maydonida mutlaqo mag‘lub bo‘lur, oyoqlar ostida ezilur, diniy, iqtisodiy ishlarda o‘zgalarning asiri bo‘lub, bora­bora milliyat va diyonatini ham qo‘ldan berur. Ana ushbu yo‘llar ila oxiri mahv va nobud bo‘lub ketar”.\n' +
                '\n' +
                'Zamondosh hammaslaklari singari Behbudiy ham millat ma’rifatini oshirish, shu orqali jamiyatni yuksaltirish, ijtimoiy hayotni yaxshilashni istaydi. Shu yo‘lda o‘zining barcha kuch va imkoniyatlarini safarbar etadi. Jamiyatni halokatdan qutqaruvchi, rivojlantiruvchi asosiy manba ilm­ma’rifat, deb hisoblagan alloma yuqoridagi maqolasida o‘z davrining faol va ziyoli yoshlariga mukammal savod chiqarishga, zamonaviy bilimlar berishga mo‘ljallangan maktablar ochish, yuqori malakali muallimlarni ko‘paytirish zaruratini yuklaydi. Taraqqiy etgan davlatlarning bu boradagi tajribalarini o‘rganishga chaqiradi. Rivojlanib borayotgan mamlakatlar va millatlarning barchasi, avvalo, zamon bilan hamnafas holda ibtidoiy (boshlang‘ich) ta’lim va tarbiyani mustahkamlashga, milliy va diniy ruhni singdirishga chuqur e’tibor qaratishini aniq dalillar bilan ko‘rsatib o‘tadi: “Binoan alayh, yer yuzidagi barcha millatlar o‘z bolalarining ibtidoiy tarbiyasig‘a va maktablarning har jihatdan intizom va akmolig‘a ahamiyat berub bolalarini milliy va diniy ruhda mukammal suratda yetushdurarlar. Aning uchundurki, o‘zga millatlar diniy va milliy hissiyotg‘a molik bo‘lub, har ishda diyonat va milliyatni muqaddam tutarlar. Va luzumi kelganda bu yo‘lda molu jonlarini fido etmoqg‘a hozir turarlar. Mana, hozirgi urushlar va iqtisodiy tortishlar diyonat va milliyat hissiyoti natijasidur”.\n' +
                '\n' +
                'Shuningdek, “Ehtiyoji millat” maqolasi ham Behbudiyning jamiyat taraqqiyoti, millat ma’rifati, yosh avlod taqdiri borasidagi kuyunchak fikrlarini qamrab olgan. Uning mazmunida bugunning nafasi ham aks etib turadi. Bundan roppa­rosa bir asr avval Behbudiy va u kabi ma’rifat peshvolarining tinchini buzib, uyqusini o‘chirgan muammolar bugun o‘z yechimini topmoqda. Xorijiy tajriba almashish asosida fan­texnika jadal taraqqiy etmoqda, zamonaviy bilimlarni egallagan, “ikki emas, ko‘p tilni” biladigan\n' +
                '\n' +
                'malakali yoshlar, mas’uliyatli mutaxassislar safi kengayib bormoqda. Shunday bo‘lsa ham, Behbudiyning otashin da’vatlari o‘z dolzarbligini saqlab turibdi: Qisqa qilaylik, boshqa millatlarning boylari faqira va yetimlar uchun maktab va dorilfununlar soladurlar, faqir va yetimlarni o‘qumog‘i uchun vaqf “istipendiya”lar ta’yin qilur. Boshqa millat miliunerlari maktabi ila istipendiyasi­la, idora qilaturgon gazet va majallasi­la, bino qilgan dorulojizin (ayollar universiteti), barpo qilgan jam’iyati xayriyasi­la faxr qiladur.Ushbu fikrlardan ko‘rinadiki, allomani millat, yurt kelajagi tashvishga soladi. Mol­dunyo, dabdabaga o‘ch bo‘lib, undan faqat maishiy maqsadlarda foydalanishni chinakam qashshoqlik deb qoralaydi. Bu illat egalarini ezgu amallarga chorlash uchun boshqa millat davlatmandlarining ilm­fan, maktab­maorif yo‘lida qilayotgan xayrli tashabbuslarini namuna qilib ko‘rsatadi. To‘yu tomosha, maishatlarga sarflayotgan boyliklarini zamonaviy maktablar ochish, muallimlar tayyorlash kabi ma’rifiy ishlarga yo‘naltirishga chaqiradi. Shunisi e’tiborliki, Behbudiyning ushbu qarashlari hamon dolzarb. Bugun ham jamiyatda o‘z boyligini ko‘z­ko‘z qilishni, turli ko‘rinishdagi oilaviy tadbirlarini o‘ta dabdababozlik bilan nishonlashni xush ko‘ruvchi toifalar ko‘plab kuzatiladi. Vaholanki, muqaddas kalomlarda ham insonga berilgan boylik o‘zi uchun ne’matu sinov bo‘lib, bu davlatda ko‘pgina muhtojlarning, faqirlarning ham haqqi borligi, uni xayru ehson yo‘lida sarflabgina chinakam saodatga erishish mumkinligi uqtiriladi.\n' +
                '\n'
        },
        {
            id:8,
            file_path:news8,
            info:'Mahmudxo‘ja Behbudiy nomidagi maxsus stipendiya g‘oliblari aniqlandi\n' +
                '\n' +
                'O‘zbekiston xalqaro islom akademiyasida Mahmudxo‘ja Behbudiy hayoti va ijodini o‘rganish, faoliyatini yoritish, ilmiy tadqiq qilish hamda targ‘ib etish yo‘nalishida izlanish olib borayotgan talabalarni rag‘batlantirish maqsadida “Mahmudxo‘ja Behbudiy nomidagi maxsus stipendiya” tanlovi o‘tkazilgan edi.\n' +
                '\n' +
                'Islomshunoslik fakulteti “Dinshunoslik” ta’lim yo‘nalishi 1-bosqich talabasi Jahongir Saidqulov, Mumtoz sharq filologiyasi fakulteti “Filologiya va tillarni o‘qitish” yo‘nalishi 2-bosqich talabasi E’zoza Usmonxo‘jayeva, Islom iqtisodiyoti va xalqaro munosabatlar fakulteti “Turizm (ziyorat turizmi)” yo‘nalishi 3-bosqich talabasi Muhammadamin Mamanov hamda “Qiyosiy dinshunoslik” 1-bosqich magistranti Ibrohim Nig‘matullayev “Mahmudxo‘ja Behbudiy nomidagi maxsus stipendiya” g‘oliblariga aylanishdi.\n' +
                '\n' +
                'Batafsil: https://iiau.uz/oz/news/1494\n' +
                '\n' +
                'Rasmiy sahifalarimizni kuzatib boring! 🔽\n'
        },
        {
            id:9,
            file_path:news9,
            info:'\n' +
                'Adiblar xiyobonida ma’naviy tadbirlar\n' +
                '\n' +
                'Poytaxtimizdagi Adiblar xiyobonida O‘zbekiston xalqaro islom akademiyasining bir guruh ustoz va talabalari ishtirokida ma’naviy-ma’rifiy tadbir bo‘lib o‘tdi.\n' +
                '\n' +
                'Dastlab Mahmudxo‘ja Behbudiy xaykali poyiga gul qo‘yilib, adib yod etildi. Shundan so‘ng buyuk ajdodimiz Mahmudxo‘ja Behbudiyning ilmiy-ma’naviy merosi, hayoti va ijodi, yosh avlodni asriy qadriyatlarga sodiq, zamon bilan hamnafas, zukko, bilimdon etib tarbiyalashga qaratilgan o‘gitlari tilga olindi.\n' +
                '\n' +
                'Batafsil: https://iiau.uz/oz/news/1362\n' +
                '\n' +
                'O‘zbekiston xalqaro islom akademiyasining rasmiy sahifalarini kuzatib boring! 🔽\n'
        }
    ]


    return (
        writer.id===1?<Box sx={{flexGrow: 1}}>
            <Grid container spacing={2}>
                {
                    books.map((i, index) => {
                            return (
                                <Grid item xs={12} sm={6} md={3} key={index} >
                                    <Item>
                                        <CardActionArea className={'border rounded rounded-1'}>
                                            <Card sx={{maxWidth: 345, maxHeight: 300, minHeight: 300}}>

                                                <CardMedia
                                                    component="img"
                                                    height="140"
                                                    image={i.file_path}
                                                    alt="green iguana"
                                                />
                                                <NavLink to={'/published_news'} className='text-decoration-none text-black'
                                                         onClick={() => changeDirection(i)}>
                                                    <CardContent className='p-1 px-4'>
                                                        <Typography variant="body2" color="text.secondary">
                                                            {i.info}
                                                        </Typography>
                                                    </CardContent>
                                                </NavLink>
                                            </Card>
                                        </CardActionArea>
                                    </Item>
                                </Grid>
                            );
                    })}
            </Grid>
        </Box>:''

    );
}

export default WriterCard