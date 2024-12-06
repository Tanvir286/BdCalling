/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            colors: {      
                "white1": '#f4f6f6',             
                "black1": '##212337',             
                "black2": '#4A4A52',             
                "black3": '#A6A6A6',             
                "halkagreen": '#749B3F',             
                "orange": '#FF6A1A',                                     
            },   
            container: {
                center: true 
            },
            fontFamily: {
                "rubik-regular": ['Rubik Regular'],
                "rubik-light": ['Rubik Light'],
                "rubik-medium": ['Rubik Medium'],
                "rubik-bold": ['Rubik Bold'],
                "rubik-semibold": ['Rubik SemiBold'],
                "questrial-regular": ['questrial Regular'],
              
            },
            fontSize:{
                8: "8px",
                15: "15px",
                21: "21px",
                30: "30px",
                32: "32px",
                40: "40px",
                44: "44px",
                46:  "46px",
                56: "56px",
                62: "62px",
                80: "80px",
                120: "120px",
            },
            spacing:{
                115:"115px",             
                120:"120px",             
                150:"150px",             
                350:"350px",             
                414:"414px",             
            },
            width:{
                10:'10%',
                75:'75%',
                15:'15%',
                35:'35%',
                39:'39%',
                40:'45%',
                60:'60%',
                65:'65%',
            },
            maxWidth:{
                container:"1200px",
                300: "300px",
                330: "330px",
                458: "448px",
                478: "478px",
                529: "529px",
                538: "538px",
                578: "578px",
                624: "624px",
                660: "664px",
               
                "23%":"23%",
                "48%":"48%",
            },
            minWidth:{
                 480: "480px",
                 300: "300px",
                 450: "450px",
                 600: "600px",
            },
            backgroundImage: {
                'banner': "var(--banner-image)",
                'book': "var(--book-image)",
            },
        },
    },
    plugins: [],
}
 