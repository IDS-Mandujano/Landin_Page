const mysql = {
    icons: [
        {
        section: "#Inicio",
        image: "./Iconos/home.png"
        },
        {
        section: "#Productos",
        image: "./Iconos/productos.png"
        },
        {
        section: "#Comprar",
        image: "./Iconos/car_shop.png"
        }
    ],

    image_products:[
        {
            image: "./Frutas/Frutas1.png"
        },
        {
            image: "./Frutas/Frutas2.png"
        }
    ],

    frutas:[
        {
            name: "Mango",
            description: "¡Aquí está el rey de las frutas tropicales! ¡Mango dulce y suculento, perfecto para tus batidos, salsas, o para disfrutarlo al natural! ¡Rico en vitaminas y antioxidantes, una delicia que te cuida por dentro y por fuera!",
            image: "./Productos/Mango.png"
        },
        {
            name: "Rambutan",
            description: "¡Vea esta fruta tan especial! ¡Rambután, directo del trópico, con su cáscara roja y espinosa que esconde una pulpa blanca y jugosa! ¡Un sabor dulce que no puedes dejar de probar! ¡Ideal para ensaladas de frutas o como un snack saludable!",
            image: "./Productos/Rambutan.png"
        },

        {
            name: "Piña",
            description: "¡Mire esta belleza! ¡Piña recién cortada, con ese aroma que te transporta al paraíso! Perfecta para tus jugos, ensaladas o simplemente para comerla fresquita. ¡Llena de vitamina C para mantenerte saludable y con energía!",
            image: "./Productos/Piña.png"
        }
    ],
    
    stock:[
        {
            name: "Mango",
            image: "./Stock/Mango.png",
            description: "¡Aquí está el rey de las frutas tropicales! ¡Mango dulce y suculento, perfecto para tus batidos, salsas, o para disfrutarlo al natural!",
            price: "$2.50 por unidad"
        },
        {
            name: "Rambutan",
            image: "./Stock/Rambutan.png",
            description: "¡Vea esta fruta tan especial! ¡Rambután, directo del trópico, con su cáscara roja y espinosa que esconde una pulpa blanca y jugosa!",
            price: "$3.00 por cada 500 gramos"
        },
        {
            name: "Piña",
            image: "./Stock/Piña.png",
            description: "¡Mire esta belleza! ¡Piña recién cortada, con ese aroma que te transporta al paraíso! Perfecta para tus jugos, ensaladas o simplemente para comerla fresquita",
            price: "$4.00 por unidad"
        },
        {
            name: "Sandia",
            image: "./Stock/Sandia.png",
            description: "¡Mire esta belleza! ¡Sandía recién cortada, con ese aroma fresco que te transporta al verano! Perfecta para tus jugos, ensaladas o simplemente para comerla bien fría.",
            price: "$0.60 por kilogramo"
        }
    ],

    Social_Links: [
        {
            links: "",
            icon: "./Socials/fb.png"
        },
        {
            links: "",
            icon: "./Socials/ghb.png"
        },
        {
            links: "",
            icon: "./Socials/lkndIn.png"
        }
    ]
}

export default mysql