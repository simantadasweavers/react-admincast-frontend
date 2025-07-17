// import './index.css'

export const Sidebar = () => {
    return (
        <>

            <header className="header">
                <div className="page-brand">
                    <a className="link" href="index.html">
                        <span className="brand">Admin
                            <span className="brand-tip">CAST</span>
                        </span>
                        <span className="brand-mini">AC</span>
                    </a>
                </div>
                <div className="flexbox flex-1">
                    <ul className="nav navbar-toolbar">
                        <li>
                            <a className="nav-link sidebar-toggler js-sidebar-toggler"><i className="ti-menu"></i></a>
                        </li>
                        <li>
                            <form className="navbar-search" action="javascript:;">
                                <div className="rel">
                                    <span className="search-icon"><i className="ti-search"></i></span>
                                    <input className="form-control" placeholder="Search here..." />
                                </div>
                            </form>
                        </li>
                    </ul>
                    <ul className="nav navbar-toolbar">
                        <li className="dropdown dropdown-inbox">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown"><i className="fa fa-envelope-o"></i>
                                <span className="badge badge-primary envelope-badge">9</span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-right dropdown-menu-media">
                                <li className="dropdown-menu-header">
                                    <div>
                                        <span><strong>9 New</strong> Messages</span>
                                        <a className="pull-right" href="mailbox.html">view all</a>
                                    </div>
                                </li>
                                <li className="list-group list-group-divider scroller" data-height="240px" data-color="#71808f">
                                    <div>
                                        <a className="list-group-item">
                                            <div className="media">
                                                <div className="media-img">
                                                    <img src="./assets/img/users/u1.jpg" />
                                                </div>
                                                <div className="media-body">
                                                    <div className="font-strong"> </div>Jeanne Gonzalez<small className="text-muted float-right">Just now</small>
                                                    <div className="font-13">Your proposal interested me.</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="list-group-item">
                                            <div className="media">
                                                <div className="media-img">
                                                    <img src="./assets/img/users/u2.jpg" />
                                                </div>
                                                <div className="media-body">
                                                    <div className="font-strong"></div>Becky Brooks<small className="text-muted float-right">18 mins</small>
                                                    <div className="font-13">Lorem Ipsum is simply.</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="list-group-item">
                                            <div className="media">
                                                <div className="media-img">
                                                    <img src="./assets/img/users/u3.jpg" />
                                                </div>
                                                <div className="media-body">
                                                    <div className="font-strong"></div>Frank Cruz<small className="text-muted float-right">18 mins</small>
                                                    <div className="font-13">Lorem Ipsum is simply.</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="list-group-item">
                                            <div className="media">
                                                <div className="media-img">
                                                    <img src="./assets/img/users/u4.jpg" />
                                                </div>
                                                <div className="media-body">
                                                    <div className="font-strong"></div>Rose Pearson<small className="text-muted float-right">3 hrs</small>
                                                    <div className="font-13">Lorem Ipsum is simply.</div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown dropdown-notification">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown"><i className="fa fa-bell-o rel"><span className="notify-signal"></span></i></a>
                            <ul className="dropdown-menu dropdown-menu-right dropdown-menu-media">
                                <li className="dropdown-menu-header">
                                    <div>
                                        <span><strong>5 New</strong> Notifications</span>
                                        <a className="pull-right" href="javascript:;">view all</a>
                                    </div>
                                </li>
                                <li className="list-group list-group-divider scroller" data-height="240px" data-color="#71808f">
                                    <div>
                                        <a className="list-group-item">
                                            <div className="media">
                                                <div className="media-img">
                                                    <span className="badge badge-success badge-big"><i className="fa fa-check"></i></span>
                                                </div>
                                                <div className="media-body">
                                                    <div className="font-13">4 task compiled</div><small className="text-muted">22 mins</small></div>
                                            </div>
                                        </a>
                                        <a className="list-group-item">
                                            <div className="media">
                                                <div className="media-img">
                                                    <span className="badge badge-default badge-big"><i className="fa fa-shopping-basket"></i></span>
                                                </div>
                                                <div className="media-body">
                                                    <div className="font-13">You have 12 new orders</div><small className="text-muted">40 mins</small></div>
                                            </div>
                                        </a>
                                        <a className="list-group-item">
                                            <div className="media">
                                                <div className="media-img">
                                                    <span className="badge badge-danger badge-big"><i className="fa fa-bolt"></i></span>
                                                </div>
                                                <div className="media-body">
                                                    <div className="font-13">Server #7 rebooted</div><small className="text-muted">2 hrs</small></div>
                                            </div>
                                        </a>
                                        <a className="list-group-item">
                                            <div className="media">
                                                <div className="media-img">
                                                    <span className="badge badge-success badge-big"><i className="fa fa-user"></i></span>
                                                </div>
                                                <div className="media-body">
                                                    <div className="font-13">New user registered</div><small className="text-muted">2 hrs</small></div>
                                            </div>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown dropdown-user">
                            <a className="nav-link dropdown-toggle link" data-toggle="dropdown">
                                <img src="src/assets/img/admin-avatar.png" />
                                <span></span>Admin<i className="fa fa-angle-down m-l-5"></i></a>
                            <ul className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="profile.html"><i className="fa fa-user"></i>Profile</a>
                                <a className="dropdown-item" href="profile.html"><i className="fa fa-cog"></i>Settings</a>
                                <a className="dropdown-item" href="javascript:;"><i className="fa fa-support"></i>Support</a>
                                <li className="dropdown-divider"></li>
                                <a className="dropdown-item" href="login.html"><i className="fa fa-power-off"></i>Logout</a>
                            </ul>
                        </li>
                    </ul>
                </div>
            </header>


            <nav className="page-sidebar" id="sidebar">
                <div id="sidebar-collapse">
                    <div className="admin-block d-flex">
                        <div>
                            <img src="/src/assets/img/admin-avatar.png" width="45px" />
                        </div>
                        <div className="admin-info">
                            <div className="font-strong">Shimanta Das</div><small>User</small></div>
                    </div>
                    <ul className="side-menu metismenu">
                        <li>
                            <a className="active" href="index.html"><i className="sidebar-item-icon fa fa-th-large"></i>
                                <span className="nav-label">Dashboard</span>
                            </a>
                        </li>
                        <li className="heading">FEATURES</li>
                        <li>
                            <a href="javascript:;"><i className="sidebar-item-icon fa fa-bookmark"></i>
                                <span className="nav-label">Basic UI</span><i className="fa fa-angle-left arrow"></i></a>
                            <ul className="nav-2-level collapse">
                                <li>
                                    <a href="colors.html">Colors</a>
                                </li>
                                <li>
                                    <a href="typography.html">Typography</a>
                                </li>
                                <li>
                                    <a href="panels.html">Panels</a>
                                </li>
                                <li>
                                    <a href="buttons.html">Buttons</a>
                                </li>
                                <li>
                                    <a href="tabs.html">Tabs</a>
                                </li>
                                <li>
                                    <a href="alerts_tooltips.html">Alerts &amp; Tooltips</a>
                                </li>
                                <li>
                                    <a href="badges_progress.html">Badges &amp; Progress</a>
                                </li>
                                <li>
                                    <a href="lists.html">List</a>
                                </li>
                                <li>
                                    <a href="cards.html">Card</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;"><i className="sidebar-item-icon fa fa-edit"></i>
                                <span className="nav-label">Forms</span><i className="fa fa-angle-left arrow"></i></a>
                            <ul className="nav-2-level collapse">
                                <li>
                                    <a href="form_basic.html">Basic Forms</a>
                                </li>
                                <li>
                                    <a href="form_advanced.html">Advanced Plugins</a>
                                </li>
                                <li>
                                    <a href="form_masks.html">Form input masks</a>
                                </li>
                                <li>
                                    <a href="form_validation.html">Form Validation</a>
                                </li>
                                <li>
                                    <a href="text_editors.html">Text Editors</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;"><i className="sidebar-item-icon fa fa-table"></i>
                                <span className="nav-label">Tables</span><i className="fa fa-angle-left arrow"></i></a>
                            <ul className="nav-2-level collapse">
                                <li>
                                    <a href="table_basic.html">Basic Tables</a>
                                </li>
                                <li>
                                    <a href="datatables.html">Datatables</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;"><i className="sidebar-item-icon fa fa-bar-chart"></i>
                                <span className="nav-label">Charts</span><i className="fa fa-angle-left arrow"></i></a>
                            <ul className="nav-2-level collapse">
                                <li>
                                    <a href="charts_flot.html">Flot Charts</a>
                                </li>
                                <li>
                                    <a href="charts_morris.html">Morris Charts</a>
                                </li>
                                <li>
                                    <a href="chartjs.html">Chart.js</a>
                                </li>
                                <li>
                                    <a href="charts_sparkline.html">Sparkline Charts</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;"><i className="sidebar-item-icon fa fa-map"></i>
                                <span className="nav-label">Maps</span><i className="fa fa-angle-left arrow"></i></a>
                            <ul className="nav-2-level collapse">
                                <li>
                                    <a href="maps_vector.html">Vector maps</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="icons.html"><i className="sidebar-item-icon fa fa-smile-o"></i>
                                <span className="nav-label">Icons</span>
                            </a>
                        </li>
                        <li className="heading">PAGES</li>
                        <li>
                            <a href="javascript:;"><i className="sidebar-item-icon fa fa-envelope"></i>
                                <span className="nav-label">Mailbox</span><i className="fa fa-angle-left arrow"></i></a>
                            <ul className="nav-2-level collapse">
                                <li>
                                    <a href="mailbox.html">Inbox</a>
                                </li>
                                <li>
                                    <a href="mail_view.html">Mail view</a>
                                </li>
                                <li>
                                    <a href="mail_compose.html">Compose mail</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="calendar.html"><i className="sidebar-item-icon fa fa-calendar"></i>
                                <span className="nav-label">Calendar</span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;"><i className="sidebar-item-icon fa fa-file-text"></i>
                                <span className="nav-label">Pages</span><i className="fa fa-angle-left arrow"></i></a>
                            <ul className="nav-2-level collapse">
                                <li>
                                    <a href="invoice.html">Invoice</a>
                                </li>
                                <li>
                                    <a href="profile.html">Profile</a>
                                </li>
                                <li>
                                    <a href="login.html">Login</a>
                                </li>
                                <li>
                                    <a href="register.html">Register</a>
                                </li>
                                <li>
                                    <a href="lockscreen.html">Lockscreen</a>
                                </li>
                                <li>
                                    <a href="forgot_password.html">Forgot password</a>
                                </li>
                                <li>
                                    <a href="error_404.html">404 error</a>
                                </li>
                                <li>
                                    <a href="error_500.html">500 error</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;"><i className="sidebar-item-icon fa fa-sitemap"></i>
                                <span className="nav-label">Menu Levels</span><i className="fa fa-angle-left arrow"></i></a>
                            <ul className="nav-2-level collapse">
                                <li>
                                    <a href="javascript:;">Level 2</a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <span className="nav-label">Level 2</span><i className="fa fa-angle-left arrow"></i></a>
                                    <ul className="nav-3-level collapse">
                                        <li>
                                            <a href="javascript:;">Level 3</a>
                                        </li>
                                        <li>
                                            <a href="javascript:;">Level 3</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
