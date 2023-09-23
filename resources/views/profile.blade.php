<!DOCTYPE html>
<html class="no-js" lang="en">

<head>
  <!-- Meta Tags -->
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="author" content="mcisme">
  <!-- Site Title -->
  <title>PROFIL - {{$cardData->first_name.' '.$cardData->last_name}} | avrp | VIRAZA | MCISME</title>
  <meta name="description" content="Gloire Mwanambuyi, âgé de 31 ans, est un ingénieur originaire de Kinshasa, République démocratique du Congo. Il est membre de l'avrp - TSHISEKEDI avec le matricule #FED-10ZS-CJJ2 et a été enregistré le 28 août 2023. Né le 11 avril 1992, il réside à Av, UNIVERSITE, N°108, Q/LIVULU, C/LEMBA. Contact : gloiremwana@gmail.com">
  <link rel="stylesheet" href="/vendor/profile/css/style.css">
  <style>
    .tm_invoice.tm_style2 .tm_logo img { width: 100px; max-height: 100px; margin-top: -15px; }
    .header-contact-img { display: flex; align-items: center; justify-content: space-between; }
    .header-contact-img > div { text-align: center; } 
    .tm_bottom_invoice { background: #8283f7; color: aliceblue; }
    .tm_invoice.tm_style2.tm_type1 .tm_bottom_invoice { margin:0; }
  </style>

  {{-- Génération de la description meta --}}
  @php
    $metaDescription = "{$cardData->first_name} {$cardData->last_name}, âgé de {$cardData->age} ans, est {$cardData->occupation} originaire de {$cardData->place_of_birth}, {$cardData->country}. Il est membre de {$cardData->party} avec le matricule #{$cardData->matricule} et a été enregistré le {$cardData->registration_date}. Né le {$cardData->date_of_birth}, il réside à {$cardData->address}. Contact : {$cardData->email}";
  
  // URL de la miniature (image)
    $thumbnailUrl = asset("storage/{$cardData->avatar}");

    // URL de la page actuelle
    $currentUrl = Request::url();
  @endphp

  {{-- Balises meta pour les réseaux sociaux --}}
  <meta name="description" content="{{ $metaDescription }}">

  <!-- Balises Open Graph (og:) pour Facebook et d'autres réseaux sociaux -->
  <meta property="og:title" content="{{ $cardData->first_name }} {{ $cardData->last_name }} | PROFIL avrp | VIRAZA | MCISME">
  <meta property="og:description" content="{{ $metaDescription }}">
  <meta property="og:image" content="{{ $thumbnailUrl }}">
  <meta property="og:url" content="{{ $currentUrl }}">
  <meta property="og:type" content="website">

  <!-- Balises Twitter Card pour Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{{ $cardData->first_name }} {{ $cardData->last_name }} | PROFIL avrp | VIRAZA | MCISME">
  <meta name="twitter:description" content="{{ $metaDescription }}">
  <meta name="twitter:image" content="{{ $thumbnailUrl }}">
  <meta name="twitter:url" content="{{ $currentUrl }}">
</head>

<body>
  <div class="tm_container">
    <div class="tm_invoice_wrap">
      <div class="tm_invoice tm_style2 tm_type1 tm_accent_border" id="tm_download_section">
        <div class="tm_invoice_in">
          <div class="tm_invoice_head tm_top_head tm_mb20 tm_mb10_md">
            <div class="tm_invoice_left">
              <div class="tm_logo"><img src="/assets/logo-avrp.png" alt="Logo"></div>
            </div>
            <div class="tm_invoice_right">
              <div class="header-contact-img">
                <div cl ass="tm_text_center">
                  <p class="tm_accent_color tm_mb0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" fill="currentColor"><path d="M424 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zm-14.18 92.63l-144 112a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l134.18-104.36a16 16 0 0119.64 25.26z"/></svg>
                  </p> contact@avrp-tshisekedi.cd <br> contact@viraza.net
                </div>
                <div class="tm_text_center">
                  <p class="tm_accent_color tm_mb0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" fill="currentColor"><path d="M391 480c-19.52 0-46.94-7.06-88-30-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0128.64-15.2c1-.43 1.93-.84 2.76-1.21 4.95-2.23 12.45-5.6 21.95-2 6.34 2.38 12 7.25 20.86 16 18.17 17.92 43 57.83 52.16 77.43 6.15 13.21 10.22 21.93 10.23 31.71 0 11.45-5.76 20.28-12.75 29.81-1.31 1.79-2.61 3.5-3.87 5.16-7.61 10-9.28 12.89-8.18 18.05 2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47 1.48-1.13 3-2.3 4.59-3.47 10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18 18 9.08 59.11 33.59 77.14 51.78 8.77 8.84 13.66 14.48 16.05 20.81 3.6 9.53.21 17-2 22-.37.83-.78 1.74-1.21 2.75a176.49 176.49 0 01-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.42 67.42 0 01391 480z"/></svg>
                  </p> +243 900 070 010 <br> du Lundi au Vendredi
                </div>
                <div class="tm_text_center">
                    <div class="tm_logo"><img src="/storage/{{$cardData->avatar}}" alt="Logo"></div>
                </div>
              </div>
            </div>
            <div class="tm_shape_bg tm_accent_bg"></div>
          </div>
          <div class="tm_invoice_info tm_mb10">
            <div class="tm_invoice_info_left">
              <p class="tm_mb2"><b>Identité :</b></p>
              <p>
                <b class="tm_f16 tm_primary_color">{{$cardData->first_name.' '.$cardData->last_name}}</b> <br>
                Age : {{$cardData->age}} <br>
                Sexe : {{['male'=>'Masculin', 'female'=>'Féminin'][$cardData->gender]??'Non Undéfini'}} <br>
                Email : {{$cardData->email}}  <br>
                Telephone : {{$cardData->phone}}
              </p>
            </div>
            <div class="tm_invoice_info_right">
              <div class="tm_f50 tm_text_uppercase tm_text_center tm_invoice_title tm_mb15 tm_ternary_color tm_mobile_hide">avrp - TSHISEKEDI</div>
              <div class="tm_grid_row tm_col_2 tm_invoice_info_in tm_round_border tm_gray_bg">
                <div>
                  <span>Matricule :</span> <br>
                  <b class="tm_f18 tm_accent_color">#{{$cardData->key}}</b>
                </div>
                <div>
                  <span>Date d'enregistrement:</span> <br>
                  <b class="tm_f18 tm_accent_color">{{$cardData->created_at}}</b>
                </div>
              </div>
            </div>
          </div>
          <div class="tm_table tm_style1">
            <div class="tm_round_border">
              <div class="tm_table_responsive">
                <table>
                  <thead>
                    <tr>
                      <th colspan="3" class="tm_width_12 tm_semi_bold tm_primary_color">Informations supplementaires</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="tm_gray_bg">
                      <td class="tm_width_4">
                        <p class="tm_m0 tm_f16 tm_primary_color">Nom</p>
                        {{$cardData->first_name}}
                      </td>
                      <td class="tm_width_4">
                        <p class="tm_m0 tm_f16 tm_primary_color">Postnom</p>
                        {{$cardData->last_name}}
                      </td>
                      <td class="tm_width_4">
                        <p class="tm_m0 tm_f16 tm_primary_color">Prenom</p>
                        {{$cardData->home_name}}
                      </td>
                    </tr>
                    <tr class="tm_gray_bg">
                      <td class="tm_width_4">
                        <p class="tm_m0 tm_f16 tm_primary_color">Date de Naissance</p>
                        {{$cardData->date_of_birth}}
                      </td>
                      <td class="tm_width_8" colspan=2>
                        <p class="tm_m0 tm_f16 tm_primary_color">Lieu de naissance</p>
                        {{$cardData->place_of_birth}}
                      </td>
                    </tr>
                    <tr class="tm_gray_bg">
                      <td class="tm_width_8" colspan=2>
                        <p class="tm_m0 tm_f16 tm_primary_color">Occupation</p>
                        {{$cardData->occupation}}
                      </td>
                      <td class="tm_width_4">
                        <p class="tm_m0 tm_f16 tm_primary_color">Qualité</p>
                        {{$cardData->quality}}
                      </td>
                    </tr>
                    <tr class="tm_gray_bg">
                      <td class="tm_width_4">
                        <p class="tm_m0 tm_f16 tm_primary_color">Pays</p>
                        {{$cardData->country}}
                      </td>
                      <td class="tm_width_4">
                        <p class="tm_m0 tm_f16 tm_primary_color">Province</p>
                        {{$cardData->province}}
                      </td>
                      <td class="tm_width_4">
                        <p class="tm_m0 tm_f16 tm_primary_color">Ville</p>
                        {{$cardData->city}}
                      </td>
                    </tr>
                    <tr class="tm_gray_bg">
                      <td class="tm_width_4">
                        <p class="tm_m0 tm_f16 tm_primary_color">Féderation</p>
                        {{$cardData->district}}
                      </td>
                      <td class="tm_width_4">
                        <p class="tm_m0 tm_f16 tm_primary_color">Section</p>
                        {{$cardData->township}}
                      </td>
                      <td class="tm_width_4">
                        <p class="tm_m0 tm_f16 tm_primary_color">Cellule</p>
                        {{$cardData->neighborhood}}
                      </td>
                    </tr>
                    <tr class="tm_gray_bg">
                      <td class="tm_width_12" colspan="3">
                        <p class="tm_m0 tm_f16 tm_primary_color">Adresse</p>
                        {{$cardData->address}}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="tm_invoice_footer tm_type1 tm_padd_10">
              <div class="tm_left_footer"></div>
              <div class="tm_right_footer">
                <div class="tm_sign tm_text_center">
                  <img src="/assets/signature.png" alt="Sign">
                  <p class="tm_m0 tm_ternary_color">Augustin KABUYA</p>
                  <p class="tm_m0 tm_f16 tm_primary_color">Secrétaire Général</p>
                </div>
              </div>
            </div>
          </div>
          <div class="tm_bottom_invoice tm_m0">
            <div class="tm_bottom_invoice_left">
              <p class="tm_primary_color tm_f18 tm_m0 tm_bold">Note</p>
              <p class="tm_m0 tm_f12">Ceci est un profile dynaique de partisan de l'avrp, tout activité exigant ce document il devra en outre etre accompagner d'un photo-copie de la carte contenant le code QR du dit document. </p>
            </div>
            <div class="tm_bottom_invoice_right tm_mobile_hide">
              <div class="tm_logo"><img src="https://service.dev.snen.link/images/logo-full.png" alt="Logo"></div>
            </div>
          </div>
          
          <div class="tm_text_center tm_padd_15">
            <p class="tm_accent_color tm_mb0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" fill="currentColor"><circle cx="256" cy="192" r="32"/><path d="M256 32c-88.22 0-160 68.65-160 153 0 40.17 18.31 93.59 54.42 158.78 29 52.34 62.55 99.67 80 123.22a31.75 31.75 0 0051.22 0c17.42-23.55 51-70.88 80-123.22C397.69 278.61 416 225.19 416 185c0-84.35-71.78-153-160-153zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"/></svg>
            </p> 11eme Rue n°2600 \Residentiel, C\Limete <br>
            Kinshasa, RDC
          </div>
        </div>
      </div>
      <div class="tm_invoice_btns tm_hide_print">
        <a href="javascript:window.print()" class="tm_invoice_btn tm_color1">
          <span class="tm_btn_icon">
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M384 368h24a40.12 40.12 0 0040-40V168a40.12 40.12 0 00-40-40H104a40.12 40.12 0 00-40 40v160a40.12 40.12 0 0040 40h24" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/><rect x="128" y="240" width="256" height="208" rx="24.32" ry="24.32" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/><path d="M384 128v-24a40.12 40.12 0 00-40-40H168a40.12 40.12 0 00-40 40v24" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/><circle cx="392" cy="184" r="24" fill='currentColor'/></svg>
          </span>
          <span class="tm_btn_text">Imprimer</span>
        </a>
        <button id="tm_download_btn" class="tm_invoice_btn tm_color2">
          <span class="tm_btn_icon">
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M320 336h76c55 0 100-21.21 100-75.6s-53-73.47-96-75.6C391.11 99.74 329 48 256 48c-69 0-113.44 45.79-128 91.2-60 5.7-112 35.88-112 98.4S70 336 136 336h56M192 400.1l64 63.9 64-63.9M256 224v224.03" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
          </span>
          <span class="tm_btn_text">Télécharger</span>
        </button>
      </div>
    </div>
  </div>
  <script src="/vendor/profile/js/jquery.min.js"></script>
  <script src="/vendor/profile/js/jspdf.min.js"></script>
  <script src="/vendor/profile/js/html2canvas.min.js"></script>
  <script src="/vendor/profile/js/main.js"></script>
</body>
</html>