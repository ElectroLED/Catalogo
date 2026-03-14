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
        precio: 18900,
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
        precio: 25000,
        imagen: "https://i.postimg.cc/gkBX9ttz/28170115768e6d494be8d01-62979572-057f2f2fa0547965b917734048990276-1024-1024.webp",
        descripcion: "Manejá TV y Aire desde el celu. Incluye sensor TyH."
    },
    {
        nombre: "Lámpara Dicroica LED 7W Fría 6500°K",
        categoria: "Iluminación",
        precio: 3000,
        imagen: "https://i.postimg.cc/QddQ1nVj/79325865268e032b91da5c9-71455258-c29897bc24c4fadfab17734100975129-1024-1024.webp",
        descripcion: "Iluminación eficiente y duradera."
    },
    {
        nombre: "Lámpara Dicroica LED 7W Neutra 3000°K",
        categoria: "Iluminación",
        precio: 3000,
        imagen: "https://i.postimg.cc/QddQ1nVj/79325865268e032b91da5c9-71455258-c29897bc24c4fadfab17734100975129-1024-1024.webp",
        descripcion: "Iluminación eficiente y duradera."
    },
    {
        nombre: "Lámpara Dicroica LED 7W Cálida 3000°K",
        categoria: "Iluminación",
        precio: 3000,
        imagen: "https://i.postimg.cc/QddQ1nVj/79325865268e032b91da5c9-71455258-c29897bc24c4fadfab17734100975129-1024-1024.webp",
        descripcion: "Iluminación eficiente y duradera."
    },
    {
        nombre: "Reflector LED RGB SMART 30W Exterior",
        categoria: "Iluminación",
        precio: 69000,
        imagen: "https://i.postimg.cc/Qdv47pgg/D-NQ-NP-2X-752136-MLA99443028144-112025-F.webp",
        descripcion: "Resistente al agua, ideal para decorar con colores arboles, patios y frentes. Control por APP, programable y dimerible. Apto para manejar con Google Home o Alexa"
    },
    {
        nombre: "Panel LED Montar Redondo 24W Fría",
        categoria: "Iluminación",
        precio: 22587,
        imagen: "https://i.postimg.cc/dVdh7bKn/D-NQ-NP-2X-622656-MLA95390274124-102025-F.webp",
        descripcion: "Plafón de aplicar de 30cm de diámetro."
    },
    {
        nombre: "Panel LED Montar Redondo 24W Cálido",
        categoria: "Iluminación",
        precio: 22587,
        imagen: "https://i.postimg.cc/jqwn0wk3/D-NQ-NP-2X-891985-MLA44848664792-022021-F.webp",
        descripcion: "Plafón de aplicar de 30cm de diámetro."
    },
    {
        nombre: "Panel LED redondo de 17cm, 18W 1620lm Frío De Embutir",
        categoria: "Iluminación",
        precio: 18587,
        imagen: "https://i.postimg.cc/6qcvpmgh/D-NQ-NP-2X-684436-MLA78555899009-082024-F.webp",
        descripcion: "Panel de led sin bordes, super angular con diseño innovador y atractivo. contiene clips ajustables diseñados para varios tamaños lo cual facilita su instalación. El rango ajustable del clip es 7.5 – 15 cm."
    },
    {
        nombre: " Panel LED redondo de 22cm 24W. 2280lm Neutro De Embutir",
        categoria: "Iluminación",
        precio: 23500,
        imagen: "https://i.postimg.cc/6qcvpmgh/D-NQ-NP-2X-684436-MLA78555899009-082024-F.webp",
        descripcion: "Panel de led sin bordes, super angular con diseño innovador y atractivo. contiene clips ajustables diseñados para varios tamaños lo cual facilita su instalación. El rango ajustable del clip es 7.5 – 15 cm."
    },
    {
        nombre: "Panel LED cuadrado de 17cmx17cm, 18W 1620lm Frío De Embutir",
        categoria: "Iluminación",
        precio: 22500,
        imagen: "https://i.postimg.cc/VNN1xHWm/D-NQ-NP-2X-842525-MLA93862088550-102025-F.webp",
        descripcion: "Panel de led sin bordes, super angular con diseño innovador y atractivo. contiene clips ajustables diseñados para varios tamaños lo cual facilita su instalación. El rango ajustable del clip es 7.5 – 15 cm."
    },
    {
        nombre: " Perfil de Aluminio Esquinero 16x16mm Blanco, Cover Curvo Opal Blanco x2m",
        categoria: "Iluminación",
        precio: 8000,
        imagen: "https://i.postimg.cc/fRCS7pRG/Chat-GPT-Image-14-mar-2026-12-58-11.png",
        descripcion: "Largo: 2 mtrs. Ancho: 16 mm. Alto: 16 mm. Peso: 226 gr. Instalación: Superficie. Material: Aluminio. Color: Blanco. Tapa: Blanco opal. Flexible: No. Acabado: Anodizado. Uso: Interior / Exterior"
    },
    {
        nombre: " Perfil de Aluminio Flat 13x7mm Anodizado Opal Blanco x2m",
        categoria: "Iluminación",
        precio: 8000,
        imagen: "https://i.postimg.cc/fLcNmnwj/D-NQ-NP-2X-785021-MLA106381106072-022026-F.webp",
        descripcion: "Este el perfil más compacto del catálogo. Con solo 13 mm de ancho, es un modelo Ultra Slim diseñado para instalaciones donde se necesita máxima discreción y poco espacio. Ideal para tiras LED de 8 mm o 10 mm."
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
        precio: 87000,
        imagen: "https://i.postimg.cc/g0LH0zzn/D-NQ-NP-2X-898718-MLA95400691792-102025-F.webp",
        descripcion: "Este dispositivo te permite grabar videos en alta calidad de lo que ocurre en tu hogar o negocio. Con una resolución de 720p, podrás revisar todos los videos con gran detalle y nitidez.."
    },
    {
        nombre: "CAMARA SEGURIDAD 3MP WIFI AUDIO GIRO 360° IR 10M SD",
        categoria: "Seguridad",
        precio: 52850,
        imagen: "https://i.postimg.cc/zf9jL8rn/D-NQ-NP-2X-747104-MLA108589866747-032026-F.webp",
        descripcion: "Cámara de vigilancia inteligente 3MP para interiores con cobertura total 360°. Ideal para seguridad del hogar, monitoreo de bebés o comercios. Compatible con Tuya Smart y Smart Life, cuenta con visión nocturna, audio bidireccional y alertas automáticas al celular por detección de movimiento."
    },
    {
        nombre: "Cerradura Biométrica Smart WIFI c/Camara",
        categoria: "Seguridad",
        precio: 169000,
        imagen: "https://i.postimg.cc/tgrWTR2D/106837583068e0d43a2d8346-51399007-63ea19aa4a020b5ce217734110937818-1024-1024.webp",
        descripcion: "Combina funcionalidad avanzada, seguridad y un diseño moderno para puertas de vidrio templado, madera o UPVC. Múltiples métodos de desbloqueo: Huellas dactilares: Reconocimiento rápido y seguro en solo 0,3 segundos. Contraseña: Compatible con contraseñas de 6-8 dígitos y función anti-snooping para mayor privacidad. Tarjetas IC: Registra y utiliza tarjetas inteligentes para un acceso rápido y práctico. Llaves mecánicas. Control remoto: Gestión y desbloqueo a través de la aplicación Smart Life."
    },
    {
        nombre: "Timbre SMART WIFI con cámara",
        categoria: "Domótica",
        precio: 40000,
        imagen: "https://i.postimg.cc/sg5Rsvf5/191651422368d1e570614699-81010179-4b1c9c7720e1c9008017734073846934-1024-1024.webp",
        descripcion: "Timbre con cámara de video inalámbrica admite WiFi de 2,4G, trabaja con la App Smart Life, tiene alta resolución de 480P, que le presenta imágenes y videos más claros y más detalles. Cuenta con audio bidireccional, con micrófono incorporado, que le permite hablar y ver a sus visitantes en cualquier momento y en cualquier lugar. Batería 800mA"
    },
    {
        nombre: "Sensor de Movimiento 360°",
        categoria: "Seguridad",
        precio: 21000,
        imagen: "https://i.postimg.cc/KYn8zmF7/sensor1.webp",
        descripcion: "Ideal para pasillos y ahorro de energía."
    },
    {
        nombre: "Sensor de apertura Smart Para Puertas Y Ventanas Magnetico",
        categoria: "Seguridad",
        precio: 20000,
        imagen: "https://i.postimg.cc/sDZyXnDG/23732661169affa917a55b7-50518846-a7af8e257a5b11b04a17734068674640-1024-1024.webp",
        descripcion: "Ideal para puertas ventanas y portones. Notificaciones automáticas: notificaciones inmediatas a su teléfono cuando se abre o cierra una puerta o ventana para mantenerlo mantienen informado todo el tiempo."
    },
    {
        nombre: "TECLA SMART 1 punto Black vidrio táctil",
        categoria: "Domótica",
        precio: 39700,
        imagen: "https://i.postimg.cc/25WFvMTq/C-TWSN-1CH-para-web-3-11zon.webp",
        descripcion: "Control de voz para encender y apagar hasta 1 luz de manera fácil y sencilla. Te permite ahorrar energia electrica programando el encendido y apagado de las luces cuando desees"
    },
    {
        nombre: "TECLA SMART 2 puntos Black vidrio táctil",
        categoria: "Domótica",
        precio: 39999,
        imagen: "https://i.postimg.cc/6577yRMT/C-TWSN-2CH-web-5-11zon.webp",
        descripcion: "Control de voz para encender y apagar hasta 2 luces de manera fácil y sencilla. Te permite ahorrar energia electrica programando el encendido y apagado de las luces cuando desees"
    },
    {
        nombre: "TECLA SMART 3 puntos Black vidrio táctil",
        categoria: "Domótica",
        precio: 44300,
        imagen: "https://i.postimg.cc/7hjZgsKG/C-TWSN-3CH-web-6-11zon.webp",
        descripcion: "Control de voz para encender y apagar hasta 3 luces de manera fácil y sencilla. Te permite ahorrar energia electrica programando el encendido y apagado de las luces cuando desees"
    },
    {
        nombre: "BAJO ALACENA CON TECLA 09W FRIO",
        categoria: "Iluminación",
        precio: 11200,
        imagen: "https://i.postimg.cc/4dzD8847/D-NQ-NP-2X-703692-MLA99464757366-112025-F.webp",
        descripcion: "60cm 720lm Ideal para muebles del hogar, con tecla de encendido incluida"
    },
    {
        nombre: "BAJO ALACENA CON TECLA 09W CALIDO",
        categoria: "Iluminación",
        precio: 11200,
        imagen: "https://i.postimg.cc/4dzD8847/D-NQ-NP-2X-703692-MLA99464757366-112025-F.webp",
        descripcion: "60cm 720lm Ideal para muebles del hogar, con tecla de encendido incluida"
    },
    {
        nombre: "TIRA RGB PIXEL led 5050 interior",
        categoria: "Cintas y Neón",
        precio: 30000,
        imagen: "https://i.postimg.cc/hv0fqbsC/Chat-GPT-Image-14-mar-2026-02-06-08.png",
        descripcion: "Rollo pixel ws2811 12VOLT 60led xmetro ideal para pantallas led. y escritorios o habitaciones GAMER. 5 metros de largo. Rollo de 12v. Chip Ws2811. 60 Led por metro. Consume 6Amper (90W)"
    },
    {
        nombre: "Controlodora para tira Magic PIXEL LED 358 efectos",
        categoria: "Domótica",
        precio: 11000,
        imagen: "https://i.postimg.cc/rmN8dy4k/D-NQ-NP-2X-721878-MLA71479579956-092023-F.webp",
        descripcion: " mando a distancia para la WS2801 IC RGB sueño Color luz tira Es regulador alejado sin hilos del RF, de tamaño mini pero para el control de larga distancia. Número máximo de píxeles de control: respecto de 1000píxeles (IC chips), WS2801 tira luces con medidor de 32chips, puede controlar 64meters para arriba. Se realiza más de 300 patrones y puede ajustar el brillo de luz así"
    },
    {
        nombre: "CONTROL RGB 24 BOTONES 12v clasico",
        categoria: "Cintas y Neón",
        precio: 7000,
        imagen: "https://i.postimg.cc/cCtX9CBD/D-NQ-NP-2X-926972-MLA50068513911-052022-F.webp",
        descripcion: "La controladora para tiras RGB reconocida por su calidad y durabilidad. Este dispositivo cuenta con un control infrarrojo de 24 botones que te permitirá manejar a distancia los 16 colores disponibles y los 4 efectos de luz que ofrece. Además, podrás regular la velocidad de los efectos y la intensidad de la luz a tu gusto, lo que te permitirá crear el ambiente perfecto para cada ocasión. El modelo CTRL-IR24 está fabricado en PVC"
    },
    {
        nombre: "SENSOR TUYA DE TEMPERATURA Y HUMEDAD CON DISPLAY ZIGBEE",
        categoria: "Domótica",
        precio: 39400,
        imagen: "https://i.postimg.cc/k4sB0vfb/D-NQ-NP-2X-788360-MLA94029731235-102025-F.webp",
        descripcion: "Sensor Zigbee de Temperatura, Humedad y Pantalla Digital. El modelo FT-WL-TH05Z es un sensor para interiores que mide temperatura y humedad, e incluye pantalla digital para visualizar los datos en el momento. Funciona con tecnología Zigbee 3.0 y requiere una unidad central compatible para su integración con sistemas de automatización del hogar."
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
        nombre: "Lámpara LED E27 7W, Blanco Frío 6000K A60",
        categoria: "Iluminacion",
        precio: 2000,
        imagen: "https://i.postimg.cc/d3P76YcM/D-NQ-NP-2X-827985-MLA90379748426-082025-F.webp",
        descripcion: "PRODUCTO: Lampara led bulbo 7w = 60w. Tono: Frio/ 6000°k. Lumenes (Intensidad de luz): 480lm. Apertura: 180°. Zócalo: E27. Conexión: 220v. Material: PVC. Diametro 6cm / largo 11cm"
    },
    {
        nombre: "Lámpara LED E27 7W, Blanco Cálido 3000K A60",
        categoria: "Iluminacion",
        precio: 2000,
        imagen: "https://i.postimg.cc/d3P76YcM/D-NQ-NP-2X-827985-MLA90379748426-082025-F.webp",
        descripcion: "PRODUCTO: Lampara led bulbo 7w = 60w. Tono: Cálido/ 3000°k. Lumenes (Intensidad de luz): 480lm. Apertura: 180°. Zócalo: E27. Conexión: 220v. Material: PVC. Diametro 6cm / largo 11cm"
    },
    {
        nombre: "LETRAS COLORES. SE PUEDE AGREGAR LUZ",
        categoria: "Cartelería",
        precio: 75000,
        imagen: "https://i.postimg.cc/2SfhdsfZ/Whats-App-Image-2026-03-13-at-22-11-28.jpg",
        descripcion: "Diseños a medida. Impresion 3d con opcion en PLA,ABS, PETS o policarbonato."
    },
    {
        nombre: "ARCOIRIS NEON EJEMPLO",
        categoria: "Cartelería",
        precio: 70000,
        imagen: "https://i.postimg.cc/T24cbN16/Whats-App-Image-2026-03-13-at-22-14-47-(1).jpg",
        descripcion: "Diseños a medida. Colores y tamaños sujeeeto a modificacion de precio"
    },
    {
        nombre: "CERVEZ NEON ACRILICO EJEMPLO",
        categoria: "Cartelería",
        precio: 65000,
        imagen: "https://i.postimg.cc/sX1hDyps/Whats-App-Image-2026-03-13-at-22-19-02.jpg",
        descripcion: "Diseños a medida. Colores y tamaños sujeeeto a modificacion de precio"
    },
    {
        nombre: "LETRAS IMPRESION 3D CON FONDO PARA LUCES Y DIFUSOR",
        categoria: "Cartelería",
        precio: 60000,
        imagen: "https://i.postimg.cc/NjJmHpQh/Whats-App-Image-2026-03-13-at-22-26-06.jpg",
        descripcion: "Diseños a medida. Impresion 3d con opcion en PLA,ABS, PETS o policarbonato."
    },
    {
        nombre: "Balde Cerveza",
        categoria: "Cartelería",
        precio: 60000,
        imagen: "https://i.postimg.cc/fy8Trq2j/Whats-App-Image-2026-03-13-at-22-28-00.jpg",
        descripcion: "Diseños a medida. Precio por letra"
    },
    {
        nombre: "TC 3D IMPRESO EN PLA",
        categoria: "Cartelería",
        precio: 30000,
        imagen: "https://i.postimg.cc/zXLrNf39/Whats-App-Image-2026-03-13-at-22-26-06-(1).jpg",
        descripcion: "Diseños a medida. Impresion 3d con opcion en PLA,ABS, PETS o policarbonato."
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
        imagen: "https://i.postimg.cc/Rhy8bMTR/Chat-GPT-Image-13-mar-2026-07-36-01-p-m.png",
        descripcion: "Combo listo para instalar: incluye 3 metros de neón (color a elección) y fuente."
    },
    {
        nombre: "Kit Perfil de aluminio con difusor x2m + Tira led RGB x 2m",
        categoria: "Kits",
        precio: 13000,
        imagen: "https://i.postimg.cc/SxP2t8cg/Chat-GPT-Image-14-mar-2026-12-54-50.png",
        descripcion: "Combo para sumar de a 2metros, IDEAL para SETUP GAMER o cielos rasos."
    },
    {
        nombre: "KIT SEGURIDA INTELIGENTE EXTERIOR Y LLUVIA- ELECTRO LED",
        categoria: "Kits",
        precio: 265000,
        imagen: "https://i.postimg.cc/NMb2xSbK/Chat-GPT-Image-13-mar-2026-06-58-24-p-m.png",
        descripcion: "Protección total y control desde tu celular. Incluye: 1 Cerradura Biométrica Smart (Huella/App), 1 Cámara WiFi 360° con audio, 1 Sensor de Movimiento y 1 Sensor de Apertura de puertas/ventanas. ¡Todo gestionado desde la misma App!"
    },
    {
        nombre: "KIT SEGURIDAD HOGAR INTELIGENTE - ELECTRO LED",
        categoria: "Kits",
        precio: 99900,
        imagen: "https://i.postimg.cc/1RdsNQ1n/Chat-GPT-Image-14-mar-2026-14-32-02.png",
        descripcion: "Protección total y control desde tu celular. Incluye: 1 Camara de vigilancia 360° SMART, 1 Switch smart, 1 Sensor de Movimiento y 1 Sensor de Apertura de puertas/ventanas. ¡Todo gestionado desde la misma App!"
    },
    {
        nombre: "Kit Tira LED RGB Smart WiFi",
        categoria: "Kits",
        precio: 44500,
        imagen: "https://i.postimg.cc/nrJ9KmyZ/Chat-GPT-Image-13-mar-2026-07-27-21-p-m.png",
        descripcion: "5m tira RGB + Fuente + Controladora WiFi. ¡Manejalo desde el celu!"
    },
    {
        nombre: "Kit Tira LED RGB Clásico",
        categoria: "Kits",
        precio: 31900,
        imagen: "https://i.postimg.cc/DyGs9jwj/Chat-GPT-Image-13-mar-2026-07-20-11-p-m.png",
        descripcion: "5m tira RGB + Fuente + Control Remoto. Simple y efectivo."
    }
];
