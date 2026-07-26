/* ==========================================================
   Students Homework AI
   Version 3.0
   style.css
   PART 1
   Global • Header • Hero • Registration
   ========================================================== */

/* -----------------------------
   ROOT VARIABLES
------------------------------ */

:root{

    --primary:#1565C0;
    --primary-dark:#0D47A1;
    --secondary:#22C55E;
    --secondary-dark:#16A34A;

    --background:#F5F8FC;
    --surface:#FFFFFF;

    --text:#1E293B;
    --text-light:#64748B;

    --border:#E2E8F0;

    --danger:#DC2626;

    --radius:16px;

    --shadow:
        0 8px 30px rgba(0,0,0,.08);

}

/* -----------------------------
   RESET
------------------------------ */

*{

    margin:0;

    padding:0;

    box-sizing:border-box;

}

html{

    scroll-behavior:smooth;

}

body{

    font-family:'Poppins',sans-serif;

    background:var(--background);

    color:var(--text);

    min-height:100vh;

    line-height:1.5;

}

/* -----------------------------
   GLOBAL
------------------------------ */

img{

    max-width:100%;

    display:block;

}

button{

    font-family:'Poppins',sans-serif;

    cursor:pointer;

    border:none;

    outline:none;

    transition:.25s;

}

input,
textarea{

    font-family:'Poppins',sans-serif;

    outline:none;

}

.hidden{

    display:none !important;

}

/* -----------------------------
   APP
------------------------------ */

#app{

    width:100%;

    max-width:480px;

    margin:auto;

    min-height:100vh;

    background:#fff;

    box-shadow:0 0 30px rgba(0,0,0,.06);

}

/* -----------------------------
   MESSAGE BAR
------------------------------ */

.app-message{

    position:fixed;

    top:75px;

    left:50%;

    transform:translateX(-50%);

    width:92%;

    max-width:420px;

    background:var(--primary);

    color:#fff;

    padding:12px 16px;

    border-radius:12px;

    text-align:center;

    font-weight:600;

    z-index:9999;

}

/* -----------------------------
   SCREEN
------------------------------ */

.screen{

    padding:18px;

    animation:fadeIn .3s ease;

}

/* -----------------------------
   HEADER
------------------------------ */

.top-header{

    position:sticky;

    top:0;

    background:#fff;

    z-index:100;

    padding:12px 0;

    border-bottom:1px solid var(--border);

}

.brand{

    display:flex;

    align-items:center;

    gap:12px;

}

.logo{

    width:52px;

    height:52px;

    object-fit:contain;

}

.brand-title{

    font-size:22px;

    font-weight:700;

    color:var(--primary);

}

.brand-subtitle{

    font-size:13px;

    color:var(--text-light);

}

/* -----------------------------
   HERO
------------------------------ */

.hero{

    text-align:center;

    padding:28px 10px;

}

.hero-logo{

    width:110px;

    margin:0 auto 18px;

}

.hero h2{

    font-size:30px;

    font-weight:700;

    color:var(--primary-dark);

    line-height:1.25;

}

.hero p{

    margin-top:14px;

    color:var(--text-light);

    font-size:16px;

}

/* -----------------------------
   CARD
------------------------------ */

.card{

    background:var(--surface);

    border-radius:var(--radius);

    box-shadow:var(--shadow);

    padding:22px;

    margin-top:22px;

}

.registration-card h3{

    text-align:center;

    color:var(--primary);

    font-size:24px;

    margin-bottom:20px;

}

/* -----------------------------
   INPUTS
------------------------------ */

.registration-card input{

    width:100%;

    height:52px;

    margin-bottom:14px;

    padding:0 16px;

    border:1px solid var(--border);

    border-radius:12px;

    font-size:16px;

    background:#fff;

}

.registration-card input:focus{

    border-color:var(--primary);

}

/* -----------------------------
   BUTTONS
------------------------------ */

.primary-btn{

    width:100%;

    height:54px;

    border-radius:12px;

    background:var(--secondary);

    color:#fff;

    font-size:18px;

    font-weight:700;

}

.primary-btn:hover{

    background:var(--secondary-dark);

}

.secondary-btn{

    width:100%;

    height:50px;

    border-radius:12px;

    background:var(--primary);

    color:#fff;

    font-size:17px;

    font-weight:600;

}

.secondary-btn:hover{

    background:var(--primary-dark);

}

/* -----------------------------
   LOGIN CARD
------------------------------ */

.login-card{

    margin-top:20px;

    text-align:center;

}

.login-card p{

    margin-bottom:12px;

    color:var(--text-light);

}

/* -----------------------------
   LANGUAGE
------------------------------ */

.language-card{

    margin-top:24px;

}

.language-card h3{

    text-align:center;

    margin-bottom:14px;

}

.language-buttons{

    display:flex;

    gap:12px;

}

.language-btn{

    flex:1;

    height:48px;

    border-radius:12px;

    border:1px solid var(--border);

    background:#fff;

    color:var(--text);

    font-size:16px;

    font-weight:600;

}

.language-btn.active{

    background:var(--primary);

    color:#fff;

    border-color:var(--primary);

}

/* -----------------------------
   ANIMATION
------------------------------ */

@keyframes fadeIn{

    from{

        opacity:0;

        transform:translateY(8px);

    }

    to{

        opacity:1;

        transform:translateY(0);

    }

}

/* ==========================================================
   END OF PART 1
   PART 2:
   Dashboard • Usage • Class Grid • Subject Grid
   ========================================================== */
