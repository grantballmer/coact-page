<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" type="text/css" href="./css/styles.css" />

    <title>Coact Page</title>
  </head>
  <body>
    <header class="border">
      <div class="btn-container">
        <button class="btn btn__header btn-reader btn-510OC margin-right">
          Solid-510OC
        </button>
        <button class="btn btn__header btn-reader btn-510L btn__active">
          Solid-510L
        </button>
      </div>
    </header>

    <section class="banner">
      <div class="banner__background"></div>
      <div class="card card__text">
        <h1>The #1 choice for tribal community identification cards.</h1>
        <p>Check out the laminating id card printer solid-510L</p>
        <div class="btn-container">
          <button class="btn margin-right">Free Pilot Program</button>
          <button class="btn btn__light-blue btn-watch">Watch Video</button>
        </div>
      </div>
      <div class="card card__video">
        <div class="thumbnail">
          <div class="thumbnail__play">
            <img src="./assets/icons/play-button.svg" alt="play button" />
          </div>
          <div class="thumbnail__controls">
            <div class="thumbnail__controls--item">
              <img src="./assets/icons/play-button.svg" alt="play button" />
            </div>
            <div class="thumbnail__controls--progress"></div>
            <div class="thumbnail__controls--item">
              <img src="./assets/icons/volume.svg" alt="volume button" />
            </div>
            <div class="thumbnail__controls--item">
              <img src="./assets/icons/gear.svg" alt="settings button" />
            </div>
            <div class="thumbnail__controls--item">
              <img src="./assets/icons/fullscreen.svg" alt="settings button" />
            </div>
          </div>
        </div>
        <iframe
          height="280"
          src="https://www.youtube.com/embed/21FtL-9h_Jw?enablejsapi=1"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>

    <section class="details">
      <h1>Try it out, risk-free, with our free pilot program</h1>

      <div class="details__content">
        <ul class="details__content--list">
          <li>Single or Dual Sided Printing & Laminating</li>
          <li>Instant Direct Heading Lamination</li>
          <li>Priting & Laminating Speed: 22 sec./card</li>
          <li>300dpi with Edge-to-Edge Printing</li>
          <li>510S & 510D Field UPgradable to 510L</li>
          <li>2 Lines LCD with 2 LED Buttons for Front Operation</li>
          <li>
            Holographic Lamination for Visual Security & Card Durability
          </li>
          <li>Installable Encoders: MS, Contact & Contactless, SIM</li>
          <li>Upgradable Modules: Ethernet</li>
        </ul>

        <div class="details__content--form-container">
          <div class="form-header">
            <h2>Sign Up for our Pilot Program</h2>
            <p>Fill out the form below, and we'll reach out!</p>
          </div>

          <form action="contactform.php" method="post">
            <div class="input-container input-container__name">
              <label for="firstname">First Name</label>
              <input type="text" name="firstname" placeholder="First Name" />
            </div>
            <div class="input-container input-container__name">
              <label for="lastname">Last Name</label>
              <input type="text" name="lastname" placeholder="Last Name" />
            </div>
            <div class="input-container">
              <label for="email">Email Address</label>
              <input type="email" name="email" placeholder="Email Address" />
            </div>
            <div class="input-container">
              <label for="phone">Phone Number</label>
              <input type="tel" name="phone" placeholder="Phone Number" />
            </div>
            <input type="submit" class="btn btn__light-blue" value="Submit" />
          </form>
        </div>
      </div>
    </section>

    <footer>
      <div class="contact">
        <div class="contact__person">
          <div class="contact__person--image">
            <img src="./assets/images/nathan.jpg" alt="nathan wolf headshot" />
          </div>
          <div class="contact__person--text">
            <p>Nathan Wolf</p>
            <p>Business Development Specialist</p>
          </div>
        </div>
        <div class="contact__info">
          <h2>Or prefer to talk now? Contact us today!</h2>
          <p>Get in contact with us to learn more about our Pilot Program.</p>
          <div>
            <div class="contact__info--row contact__info--tel">
              <p>Phone:</p>
              <a href="tel:8332341763">(833) 234-1763</a>
            </div>
            <div class="contact__info--row">
              <p>Email:</p>
              <a href="mailto:Nathan@idpamericas.com">Nathan@idpamericas.com</a>
            </div>
          </div>
        </div>
      </div>

      <div class="border"></div>
    </footer>

    <script src="./scripts/bundle.js"></script>
  </body>
</html>
