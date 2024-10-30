=== Passwordless Login ===
Contributors: cmccaw
Tags: login, authentication, identity, security, fido
Requires at least: 5.1
Tested up to: 5.7.2
Requires PHP: 7.0
Stable tag: 1.0.2
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Eliminate the need for users to enter a password when they login to their website. 
Heslo Login enables a passwordless login experience using biometrics such as Touch or Face ID. 
If a device does not support a FIDO authenticator then the user will simply perform an email pin verification

== Description ==
Add the login button that combines biometric security, convenience, and simplicity for a powerful 1-click login experience. 
Increase conversion rates and make it extremely easy for your users to log in without a password.

Heslo Login is FIDO certified and meets all the high-security standards to provide the fastest and most secure login experience on the internet.  

### Benefits:

* Eliminate the need for your users to enter a password when they log in to your website.
* True passwordless security using Touch and Face ID. The same technology is used by the world\'s largest companies whose very businesses rely upon better authentication. Bring the same level of security to make the fastest and most secure login on the internet.
* 1-click passwordless login experience that is hassle-free, fast, and extremely secure.
* User device does not support Touch or Face ID? No problem. Simple email verification is maintain to ensure a fast, passwordless login
* Impress your users with the latest in biometric security


== Installation ==
1. Upload to the `/wp-content/plugins/` directory
1. Activate the plugin
1. Go to Settings to configure the app

== Frequently Asked Questions ==
= How do I add Heslo Login to my site? =
 
Installing Heslo Login is as easy as 1-2-3

1. Create a [Heslo Account](https://dashboard.getheslo.com?redirect_page=applications) - Takes 30 seconds to create one!
2. Create a wordpress application. Use the base url specified the Wordpress plugin settings.
3. Copy and paste the generated client and secret keys into your plugin settings.

Now you can add the `[heslo_login]` shortcode to your login page and position the Heslo button how you like.
 
= What if my user does not have a device with Touch or Face ID? =
 
A simple pin code verification will be used instead. The user will receive a 6 digit code to their email which they will use to login.

= Will my existing users be able to login? =
 
Of course! Once your users use Heslo Login they wouldn\'t want to use the traditional login flow again!

= I have a feature idea. What’s the best way to tell you about it? =
 
We would love to add new features to the app to improve your website/business. Email us at support@getheslo.com.

= I’ve still got questions. Where can I find answers? =
 
chris@getheslo.com usually replies with 24 hours so email anytime with questions about the plugin.

== Changelog ==
= 1.0.1 =
* Updated readme.txt
= 1.0 =
* Initial commit with React admin front end and OpenID authentication flow