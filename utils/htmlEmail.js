export function verifyEmailhtml({ url, user }) {
  return `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <title>Verify your email address</title>
      <style type="text/css" rel="stylesheet" media="all">
        /* Base ------------------------------ */
        *:not(br):not(tr):not(html) {
          font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
        }
        body {
          width: 100% !important;
          height: 100%;
          margin: 0;
          line-height: 1.4;
          background-color: #F5F7F9;
          color: #839197;
          -webkit-text-size-adjust: none;
        }
        a {
          color: #414EF9;
        }

        /* Layout ------------------------------ */
        .email-wrapper {
          width: 100%;
          margin: 0;
          padding: 0;
          background-color: #F5F7F9;
        }
        .email-content {
          width: 100%;
          margin: 0;
          padding: 0;
        }

        /* Masthead ----------------------- */
        .email-masthead {
          padding: 25px 0;
          text-align: center;
          background-color: #F9A8D4;
        }
        .email-masthead_logo {
          max-width: 400px;
          border: 0;
        }
        .email-masthead_name {
          height:200px;
          width:auto;
        }

        /* Body ------------------------------ */
        .email-body {
          width: 100%;
          margin: 0;
          padding: 0;
          border-top: 1px solid #E7EAEC;
          border-bottom: 1px solid #E7EAEC;
          background-color: #FFFFFF;
        }
        .email-body_inner {
          width: 570px;
          margin: 0 auto;
          padding: 0;
        }
        .email-footer {
          width: 570px;
          margin: 0 auto;
          padding: 0;
          text-align: center;
        }
        .email-footer p {
          color: #839197;
        }
        .body-action {
          width: 100%;
          margin: 30px auto;
          padding: 0;
          text-align: center;
        }
        .body-sub {
          margin-top: 25px;
          padding-top: 25px;
          border-top: 1px solid #E7EAEC;
        }
        .content-cell {
          padding: 35px;
        }
        .align-right {
          text-align: right;
        }

        /* Type ------------------------------ */
        h1 {
          margin-top: 0;
          color: #292E31;
          font-size: 19px;
          font-weight: bold;
          text-align: left;
        }
        h2 {
          margin-top: 0;
          color: #292E31;
          font-size: 16px;
          font-weight: bold;
          text-align: left;
        }
        h3 {
          margin-top: 0;
          color: #292E31;
          font-size: 14px;
          font-weight: bold;
          text-align: left;
        }
        p {
          margin-top: 0;
          color: #839197;
          font-size: 16px;
          line-height: 1.5em;
          text-align: left;
        }
        p.sub {
          font-size: 12px;
        }
        p.center {
          text-align: center;
        }

        /* Buttons ------------------------------ */
        .button {
        display: inline-block;
        background-color: #F9A8D4;
        border-radius: 3px;
        color: #ffffff !important;
        font-size: 20px;
        font-weight: 700;
        padding: 15px 30px;
        text-align: center;
        text-decoration: none;
        -webkit-text-size-adjust: none;
          mso-hide: all;
        }
        .button:hover {
          background-color: rgb(255, 132, 200);
        }
        .button a {
          color: #ffffff;
        }

        /*Media Queries ------------------------------ */
        @media only screen and (max-width: 600px) {
          .email-body_inner,
          .email-footer {
            width: 100% !important;
          }
        }
        @media only screen and (max-width: 500px) {
          .button {
            width: 100% !important;
          }
        }
      </style>
    </head>
    <body>
    <table class="email-wrapper" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center">
          <table
            class="email-content"
            width="100%"
            cellpadding="0"
            cellspacing="0"
          >
            <!-- Logo -->
            <tr>
              <td class="email-masthead">
                <img
                src="https://res.cloudinary.com/sue-gallery/image/upload/v1707938572/uzuahyh0qfwsz4js2aeb.png"
                  class="email-masthead_name"
                />
              </td>
            </tr>
            <!-- Email Body -->
            <tr>
              <td class="email-body" width="100%">
                <table
                  class="email-body_inner"
                  align="center"
                  width="570"
                  cellpadding="0"
                  cellspacing="0"
                >
                  <!-- Body content -->
                  <tr>
                    <td class="content-cell">
                      <h1>One quick step before you shop!</h1>
                      <h2>Hi ${user} ,</h2>
                      <p>
                        Thanks for joining Sue Gallery Family! Just confirm your
                        email by clicking the link below to unlock exclusive
                        deals and stay in the loop about new arrivals.
                      </p>

                      <!-- Action -->
                      <table
                        class="body-action"
                        align="center"
                        width="100%"
                        cellpadding="0"
                        cellspacing="0"
                      >
                        <tr>
                          <td align="center">
                            <div>
                              <a href='${url}' class="button"
                                >Verify Email</a
                              >
                            </div>
                          </td>
                        </tr>
                      </table>
                      <p>See you soon!,<br />The Sue Gallery Team</p>
                      <!-- Sub copy -->
                      <table class="body-sub">
                        <tr>
                          <td>
                            <p class="sub">
                              If you’re having trouble clicking the button, copy
                              and paste the URL below into your web browser.
                            </p>
                            <p class="sub">
                              <a href="${url}">${url}</a>
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
    </html>
    `;
}
export function resetPasswordEmail({ url, user }) {
  return `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <title>Verify your email address</title>
      <style type="text/css" rel="stylesheet" media="all">
        /* Base ------------------------------ */
        *:not(br):not(tr):not(html) {
          font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
        }
        body {
          width: 100% !important;
          height: 100%;
          margin: 0;
          line-height: 1.4;
          background-color: #F5F7F9;
          color: #839197;
          -webkit-text-size-adjust: none;
        }
        a {
          color: #414EF9;
        }

        /* Layout ------------------------------ */
        .email-wrapper {
          width: 100%;
          margin: 0;
          padding: 0;
          background-color: #F5F7F9;
        }
        .email-content {
          width: 100%;
          margin: 0;
          padding: 0;
        }

        /* Masthead ----------------------- */
        .email-masthead {
          padding: 25px 0;
          text-align: center;
          background-color: #F9A8D4;
        }
        .email-masthead_logo {
          max-width: 400px;
          border: 0;
        }
        .email-masthead_name {
          height:200px;
          width:auto;
        }

        /* Body ------------------------------ */
        .email-body {
          width: 100%;
          margin: 0;
          padding: 0;
          border-top: 1px solid #E7EAEC;
          border-bottom: 1px solid #E7EAEC;
          background-color: #FFFFFF;
        }
        .email-body_inner {
          width: 570px;
          margin: 0 auto;
          padding: 0;
        }
        .email-footer {
          width: 570px;
          margin: 0 auto;
          padding: 0;
          text-align: center;
        }
        .email-footer p {
          color: #839197;
        }
        .body-action {
          width: 100%;
          margin: 30px auto;
          padding: 0;
          text-align: center;
        }
        .body-sub {
          margin-top: 25px;
          padding-top: 25px;
          border-top: 1px solid #E7EAEC;
        }
        .content-cell {
          padding: 35px;
        }
        .align-right {
          text-align: right;
        }

        /* Type ------------------------------ */
        h1 {
          margin-top: 0;
          color: #292E31;
          font-size: 19px;
          font-weight: bold;
          text-align: left;
        }
        h2 {
          margin-top: 0;
          color: #292E31;
          font-size: 16px;
          font-weight: bold;
          text-align: left;
        }
        h3 {
          margin-top: 0;
          color: #292E31;
          font-size: 14px;
          font-weight: bold;
          text-align: left;
        }
        p {
          margin-top: 0;
          color: #839197;
          font-size: 16px;
          line-height: 1.5em;
          text-align: left;
        }
        p.sub {
          font-size: 12px;
        }
        p.center {
          text-align: center;
        }

        /* Buttons ------------------------------ */
        .button {
        display: inline-block;
        background-color: #F9A8D4;
        border-radius: 3px;
        color: #ffffff !important;
        font-size: 20px;
        font-weight: 700;
        padding: 15px 30px;
        text-align: center;
        text-decoration: none;
        -webkit-text-size-adjust: none;
          mso-hide: all;
        }
        .button:hover {
          background-color: rgb(255, 132, 200);
        }
        .button a {
          color: #ffffff;
        }

        /*Media Queries ------------------------------ */
        @media only screen and (max-width: 600px) {
          .email-body_inner,
          .email-footer {
            width: 100% !important;
          }
        }
        @media only screen and (max-width: 500px) {
          .button {
            width: 100% !important;
          }
        }
      </style>
    </head>
    <body>
    <table class="email-wrapper" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center">
          <table
            class="email-content"
            width="100%"
            cellpadding="0"
            cellspacing="0"
          >
            <!-- Logo -->
            <tr>
              <td class="email-masthead">
                <img
                src="https://res.cloudinary.com/sue-gallery/image/upload/v1707938572/uzuahyh0qfwsz4js2aeb.png"
                  class="email-masthead_name"
                />
              </td>
            </tr>
            <!-- Email Body -->
            <tr>
              <td class="email-body" width="100%">
                <table
                  class="email-body_inner"
                  align="center"
                  width="570"
                  cellpadding="0"
                  cellspacing="0"
                >
                  <!-- Body content -->
                  <tr>
                    <td class="content-cell">
                      <h1>One quick step before you shop!</h1>
                      <h2>Hi ${user} ,</h2>
                      <p>
                      Looks like you need a new key to unlock your shopping paradise! Click the button below to reset your password for your account
                      </p>

                      <!-- Action -->
                      <table
                        class="body-action"
                        align="center"
                        width="100%"
                        cellpadding="0"
                        cellspacing="0"
                      >
                        <tr>
                          <td align="center">
                            <div>
                              <a href='${url}' class="button"
                                >Reset Password</a
                              >
                            </div>
                          </td>
                        </tr>
                      </table>
                      <p>This link is valid for 24 hours. If you didn't request a password reset, just ignore this email and your password will remain unchanged.</p>
                      <p>Happy shopping!,<br />The Sue Gallery Team</p>
                      <!-- Sub copy -->
                      <table class="body-sub">
                        <tr>
                          <td>
                            <p class="sub">
                              If you’re having trouble clicking the button, copy
                              and paste the URL below into your web browser.
                            </p>
                            <p class="sub">
                              <a href="${url}">${url}</a>
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
    </html>
    `;
}
