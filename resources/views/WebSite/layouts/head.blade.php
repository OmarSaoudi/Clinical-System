<title>@yield('title')</title>
<!-- Stylesheets -->
<link href="{{ URL::asset('WebSite/css/bootstrap.css') }}" rel="stylesheet">
<link href="{{ URL::asset('WebSite/css/style.css') }}" rel="stylesheet">
<link href="{{ URL::asset('WebSite/css/responsive.css') }}" rel="stylesheet">

<!--Color Switcher Mockup-->
<link href="{{ URL::asset('WebSite/css/color-switcher-design.css') }}" rel="stylesheet">
<!--Color Themes-->
<link id="theme-color-file" href="{{ URL::asset('WebSite/css/color-themes/default-theme.css') }}" rel="stylesheet">

<link rel="shortcut icon" href="{{ URL::asset('WebSite/images/favicon.png') }}" type="image/x-icon">
<link rel="icon" href="{{ URL::asset('WebSite/images/favicon.png') }}" type="image/x-icon">
@yield('css')
