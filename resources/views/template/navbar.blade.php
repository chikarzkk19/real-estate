<div class="container-fluid nav-bar bg-transparent">
    <nav class="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
        <a href="/" class="navbar-brand d-flex align-items-center text-center">
            <div class="icon p-2 me-2">
                <img class="img-fluid" src="/img/rlogo.png" alt="Icon" style="width: 50px; height: 50px;">
            </div>
            <h1 class="m-0 text-primary">ProEstate Property</h1>
        </a>
        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto">
                <a href="/" class="nav-item nav-link {{ request()->segment(1) == '' ? 'active' : '' }}">Home</a>
                <a href="/about" class="nav-item nav-link {{ request()->segment(1) == 'about' ? 'active' : '' }}">About</a>
                <div class="nav-item dropdown">
                    <a href="/#" class="nav-link dropdown-toggle {{ (request()->segment(1) == 'contact') || request()->segment(1) == 'agent' ? 'active' : '' }}" data-bs-toggle="dropdown">Contact</a>
                    <div class="dropdown-menu rounded-0 m-0">
                        <a href="/contact" class="dropdown-item">Contact Us</a>
                        <a href="/agent" class="dropdown-item">Agent</a>
                    </div>
                </div>

                </div>
                <a href="/property" class="btn btn-primary ml-2 px-3 d-none d-lg-flex login-register-btn {{ request()->segment(1) == 'property' ? 'active' : '' }}">VIRTUAL TOUR</a>
            </div>
    </nav>
</div>
