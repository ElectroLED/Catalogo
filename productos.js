const productos = [
    {
        nombre: "Led NEON Flex Fucsia por metro",
        categoria: "Cintas y Neón",
        precio: 3500,
        imagen: "https://i.postimg.cc/7YMDWPXb/manguera-led-neon-fucsia-01-copia-8d911060a3b556341717539973845420-1024-1024.webp", 
        descripcion: "Ideal para decoración y carteles. Varios colores disponibles."
    },
    {
        nombre: "Led NEON Flex Naranja por metro",
        categoria: "Cintas y Neón",
        precio: 3500,
        imagen: "https://i.postimg.cc/tCbrsjPH/D-NQ-NP-2X-936947-MLA90360150512-082025-F.webp", 
        descripcion: "Ideal para decoración y carteles. Varios colores disponibles."
    },
    {
        nombre: "Led NEON Flex Verde por metro",
        categoria: "Cintas y Neón",
        precio: 3500,
        imagen: "https://i.postimg.cc/8z9MrR3d/teve-n05m-placa-meli-05-copia-90fd7cc114b565f85017539973845461-1024-1024.webp", 
        descripcion: "Ideal para decoración y carteles. Varios colores disponibles."
    },
    {
        nombre: "Led NEON Flex Amarillo por metro",
        categoria: "Cintas y Neón",
        precio: 3500,
        imagen: "https://i.postimg.cc/yY5kfVPk/manguera-led-neon-amarilla-02-d53914b8def49e25ca17539973843679-1024-1024.webp", 
        descripcion: "Ideal para decoración y carteles."
    },
    {
        nombre: "Led NEON Flex Azul por metro",
        categoria: "Cintas y Neón",
        precio: 3500,
        imagen: "https://i.postimg.cc/0NZvBnst/manguera-led-neon-azul-01-1-838785380dbc2e1d8017539973849155-1024-1024.webp", 
        descripcion: "Ideal para decoración y carteles."
    },
    {
        nombre: "Led NEON Flex Rojo por metro",
        categoria: "Cintas y Neón",
        precio: 3500,
        imagen: "https://i.postimg.cc/g2HrGvpm/manguera-led-neon-rojo-01-1-17d7bdea512493266f17539973848554-1024-1024.webp", 
        descripcion: "Ideal para decoración y carteles."
    },
    {
        nombre: "Led NEON Flex Violeta por metro",
        categoria: "Cintas y Neón",
        precio: 3500,
        imagen: "https://i.postimg.cc/ZKj1ZRgk/D-NQ-NP-2X-973878-MLA90049462114-082025-F.webp", 
        descripcion: "Ideal para decoración y carteles."
    },
    {
        nombre: "Led NEON Flex RGB por metro",
        categoria: "Cintas y Neón",
        precio: 14500,
        imagen: "https://i.postimg.cc/zvz0PwqG/D-NQ-NP-2X-820961-MLA99988659909-112025-F.webp", 
        descripcion: "Neón multicolor con efectos dinámicos."
    },
    {
        nombre: "Tira 5050 Interior Blanco Cálida x 5mts",
        categoria: "Cintas y Neón",
        precio: 14000,
        imagen: "https://i.postimg.cc/gJv98K0W/D-NQ-NP-2X-852449-MLA90942364305-082025-F.webp",
        descripcion: "Tira LED de alto brillo. Fraccionable cada 5 cm."
    },
    {
        nombre: "Tira led RGB 5050 12v interior 5mts",
        categoria: "Cintas y Neón",
        precio: 18000,
        imagen: "https://i.postimg.cc/0y4X2HsN/Chat-GPT-Image-13-mar-2026-06-14-30-p-m.png",
        descripcion: "Iluminación multicolor de alta calidad para interiores."
    },
    {
        nombre: "Módulo Smart Switch Wifi",
        categoria: "Domótica",
        precio: 17000,
        imagen: "https://i.postimg.cc/wjMN7ybs/904336441699da80ecdf9d4-43049716-36c3f002e6215bfd2617731817580192-1024-1024.webp",
        descripcion: "Controlá tus luces desde el celular con Smart Life."
    },
    {
        nombre: "Controladora Smart Music WiFi",
        categoria: "Domótica",
        precio: 18900,
        imagen: "https://i.postimg.cc/kMswS9GH/40900295268eff6b20be5c0-60621010-9205bb3680d9290f7817734096961072-1024-1024.webp",
        descripcion: "Sincronizá tus luces con la música. Compatible con Alexa/Google."
    },
    {
        nombre: "Control Remoto Smart WiFi+IR Universal",
        categoria: "Domótica",
        precio: 15000,
        imagen: "https://i.postimg.cc/gkBX9ttz/28170115768e6d494be8d01-62979572-057f2f2fa0547965b917734048990276-1024-1024.webp",
        descripcion: "Manejá TV y Aire desde el celu. Incluye sensor TyH."
    },
    {
        nombre: "Lámpara Dicroica LED 7W",
        categoria: "Iluminación",
        precio: 3000,
        imagen: "https://i.postimg.cc/QddQ1nVj/79325865268e032b91da5c9-71455258-c29897bc24c4fadfab17734100975129-1024-1024.webp",
        descripcion: "Iluminación eficiente y duradera."
    },
    {
        nombre: "Reflector LED 50W Exterior",
        categoria: "Iluminación",
        precio: 14500,
        imagen: "https://i.postimg.cc/Hx9nSdh7/28500389268e00224e551a9-64826147-dfe610496d3f25afa917733700962966-1024-1024.webp",
        descripcion: "Resistente al agua, ideal para patios y frentes."
    },
    {
        nombre: "Panel LED Montar Redondo 24W",
        categoria: "Iluminación",
        precio: 22587,
        imagen: "https://i.postimg.cc/dVdh7bKn/D-NQ-NP-2X-622656-MLA95390274124-102025-F.webp",
        descripcion: "Plafón de aplicar de 30cm de diámetro."
    },
    {
        nombre: "Cámara Smart WIFI Interior 1080P",
        categoria: "Seguridad",
        precio: 40900,
        imagen: "https://i.postimg.cc/4yYKnzmk/181371257468f00476bc6be1-83953344-94405615611040a20317734108510041-1024-1024.webp",
        descripcion: "Visión 360, audio bidireccional y visión nocturna."
    },
    {
        nombre: "Cámara DUAL Smart WiFi Exterior",
        categoria: "Seguridad",
        precio: 129000,
        imagen: "https://i.postimg.cc/ZqyvTPvz/183955767668fbff6b9a0f23-29824819-cf846f4a1c6229ba2617734072751852-1024-1024.webp",
        descripcion: "Máxima seguridad exterior con doble lente."
    },
    {
        nombre: "Cámara Smart WiFi Exterior",
        categoria: "Seguridad",
        precio: 67000,
        imagen: "https://i.postimg.cc/g0LH0zzn/D-NQ-NP-2X-898718-MLA95400691792-102025-F.webp",
        descripcion: "Este dispositivo te permite grabar videos en alta calidad de lo que ocurre en tu hogar o negocio. Con una resolución de 720p, podrás revisar todos los videos con gran detalle y nitidez.."
    },
    {
        nombre: "Cerradura Biométrica Smart WIFI",
        categoria: "Seguridad",
        precio: 160000,
        imagen: "https://i.postimg.cc/tgrWTR2D/106837583068e0d43a2d8346-51399007-63ea19aa4a020b5ce217734110937818-1024-1024.webp",
        descripcion: "Apertura por huella, clave o App. Diseño en vidrio templado."
    },
    {
        nombre: "Sensor de Movimiento 360°",
        categoria: "Seguridad",
        precio: 6200,
        imagen: "https://i.postimg.cc/KYn8zmF7/sensor1.webp",
        descripcion: "Ideal para pasillos y ahorro de energía."
    },
    {
        nombre: "Sensor de apertura Smart Para Puertas Y Ventanas Magnetico",
        categoria: "Seguridad",
        precio: 6200,
        imagen: "https://i.postimg.cc/sDZyXnDG/23732661169affa917a55b7-50518846-a7af8e257a5b11b04a17734068674640-1024-1024.webp",
        descripcion: "Ideal para puertas ventanas y portones. Notificaciones automáticas: notificaciones inmediatas a su teléfono cuando se abre o cierra una puerta o ventana para mantenerlo mantienen informado todo el tiempo."
    },
    {
        nombre: "Fuente de Alimentación enchufable 12V 1A",
        categoria: "Electrónica",
        precio: 7500,
        imagen: "https://i.postimg.cc/YCKkXG1j/FUENTE-PLASTICA-1A-INOLUX.jpg",
        descripcion: "Fuente estable para tiras LED y cámaras."
    },
    {
        nombre: "Fuente de Alimentación enchutafle 12V 3A",
        categoria: "Electrónica",
        precio: 9500,
        imagen: "https://i.postimg.cc/2SgrWGD0/FUENTE-PLASTICA-3A-INOLUX.jpg",
        descripcion: "Fuente estable para tiras LED y cámaras."
    },
    {
        nombre: "Fuente de Alimentación interlock 12V 5A",
        categoria: "Electrónica",
        precio: 16600,
        imagen: "https://i.postimg.cc/MH99Q9hX/D-NQ-NP-2X-757777-MLA83557696284-042025-F.webp",
        descripcion: "Fuente estable para tiras LED y cámaras."
    },
    {
        nombre: "Fuente de Alimentación regulada 12V 3A",
        categoria: "Electrónica",
        precio: 17500,
        imagen: "https://i.postimg.cc/PqmswkKP/ICONOS-PARA-INOLUX-Mesa-de-trabajo-1-copia-8.jpg",
        descripcion: "Fuente estable para tiras LED y cámaras."
    },
    {
        nombre: "Fuente de Alimentación regulada 12V 5A",
        categoria: "Electrónica",
        precio: 17500,
        imagen: "https://i.postimg.cc/43vq3QN6/ICONOS-PARA-INOLUX-Mesa-de-trabajo-1-copia-9.jpg",
        descripcion: "Fuente estable para tiras LED y cámaras."
    },
    {
        nombre: "Fuente de Alimentación regulada 12V 10A",
        categoria: "Electrónica",
        precio: 22500,
        imagen: "https://i.postimg.cc/TYZ4q4Kr/ICONOS-PARA-INOLUX-Mesa-de-trabajo-1-copia-10.jpg",
        descripcion: "Fuente estable para tiras LED y cámaras."
    },
    {
        nombre: "Fuente de Alimentación regulada 12V 16.6A",
        categoria: "Electrónica",
        precio: 27500,
        imagen: "https://i.postimg.cc/rmPJyDWc/ICONOS-PARA-INOLUX-Mesa-de-trabajo-1-copia-11.jpg",
        descripcion: "Fuente estable para tiras LED y cámaras."
    },
    {
        nombre: "Fuente de Alimentación regulada 12V 20.8A",
        categoria: "Electrónica",
        precio: 32500,
        imagen: "https://i.postimg.cc/GmdS5sxN/ICONOS-PARA-INOLUX-Mesa-de-trabajo-1-copia-12.jpg",
        descripcion: "Fuente estable para tiras LED y cámaras."
    },
    {
        nombre: "Fuente de Alimentación regulada 12V 30A",
        categoria: "Electrónica",
        precio: 39500,
        imagen: "https://i.postimg.cc/vZZtn7zW/ICONOS-PARA-INOLUX-Mesa-de-trabajo-1-copia-13.jpg",
        descripcion: "Fuente estable para tiras LED y cámaras."
    },
    {
        nombre: "Cable RGB 0.5mm (por metro)",
        categoria: "Electrónica",
        precio: 900,
        imagen: "https://i.postimg.cc/rsPmLvpG/13063975136985ab735fd146-11942737-5b4f6be77e3b5ffb5817734058232555-1024-1024.webp",
        descripcion: "Especial para extensiones de iluminación RGB."
    },
    {
        nombre: "Empalme Y para tiras led RGB",
        categoria: "Electrónica",
        precio: 1574,
        imagen: "https://i.postimg.cc/ydTjnT8f/207954502568ccb33154fc21-63957086-9d674c9e8edc45890917734056120536-1024-1024.webp",
        descripcion: "Divisor para conectar dos tramos de tira RGB."
    },

    // --- SECCIÓN DE KITS ---
    {
        nombre: "Kit Neón Flex 3mts + Fuente",
        categoria: "Kits",
        precio: 16900,
        imagen: "https://i.postimg.cc/7YMDWPXb/manguera-led-neon-fucsia-01-copia-8d911060a3b556341717539973845420-1024-1024.webp",
        descripcion: "Combo listo para instalar: incluye 3 metros de neón (color a elección) y fuente."
    },
    {
        nombre: "Kit Seguridad Hogar Inteligente",
        categoria: "Kits",
        precio: 214900,
        imagen: "https://i.postimg.cc/tgrWTR2D/106837583068e0d43a2d8346-51399007-63ea19aa4a020b5ce217734110937818-1024-1024.webp",
        descripcion: "Cerradura Biométrica + Cámara 360 + Sensores. Protección total."
    },
    {
        nombre: "Kit Tira LED RGB Smart WiFi",
        categoria: "Kits",
        precio: 41500,
        imagen: "https://i.postimg.cc/ZYg57zvP/tira.webp",
        descripcion: "5m tira RGB + Fuente + Controladora WiFi. ¡Manejalo desde el celu!"
    },
    {
        nombre: "Kit Tira LED RGB Clásico",
        categoria: "Kits",
        precio: 31900,
        imagen: "https://i.postimg.cc/ZYg57zvP/tira.webp",
        descripcion: "5m tira RGB + Fuente + Control Remoto. Simple y efectivo."
    }
];