<!-- BEGIN: Theme CSS-->
<!-- Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link
    href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
    rel="stylesheet">

<link rel="stylesheet" href="{{ asset(mix('assets/vendor/fonts/boxicons.css')) }}" />

<!-- Core CSS -->
<link rel="stylesheet" href="{{ asset(mix('assets/vendor/css/core.css')) }}" />
<link rel="stylesheet" href="{{ asset(mix('assets/vendor/css/theme-default.css')) }}" />
<link rel="stylesheet" href="{{ asset(mix('assets/css/demo.css')) }}" />
<!-- Vendors CSS -->
<link rel="stylesheet" href="{{ asset(mix('assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css')) }}" />

<!-- Custom CSS -->
<link rel="stylesheet" href="{{ asset('css/custom.css') }}" />

<!-- Datatable -->
<link href="https://cdn.datatables.net/v/bs5/dt-2.0.8/b-3.0.2/b-html5-3.0.2/r-3.0.2/datatables.min.css" rel="stylesheet">

<!-- Vendor Styles -->
@yield('vendor-style')


<!-- Page Styles -->
@yield('page-style')
