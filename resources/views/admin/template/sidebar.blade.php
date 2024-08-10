<aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">

    <!-- ! Hide app brand if navbar-full -->
    <div class="app-brand demo">
        <a href="{{ url('/admin') }}" class="app-brand-link">
            <span class="app-brand-logo demo">
                <img src="/img/rlogo.png" alt="Icon" srcset="" style="width: 50px; height: 50px;">
            </span>
            <span class="app-brand-text demo menu-text fw-bold ms-2">ProEstate</span>
        </a>

        <a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
            <i class="bx bx-chevron-left bx-sm align-middle"></i>
        </a>
    </div>

    <div class="menu-inner-shadow"></div>

    <ul class="menu-inner py-1">
        <!-- <li class="menu-header small text-uppercase">
            <span class="menu-header-text">Admin</span>
        </li> -->

        <li class="menu-item">
            <a href="{{ url('/admin') }}" class="menu-link">
                <i class="menu-icon tf-icons bx bxs-dashboard"></i>
                <div>Dashboard</div>
            </a>
        </li>


        <li class="menu-item {{ strpos(url()->current(), 'admin/property') !== false ? 'active' : ''  }}">
            <a href="{{ url('/admin/property') }}" class="menu-link">
                <i class="menu-icon tf-icons bx bx-home"></i>
                <div>Property</div>
            </a>
        </li>


    </ul>

</aside>
