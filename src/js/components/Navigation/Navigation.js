import React from "react";

import StaticMenu from "./StaticMenu"
import MobileDemo from "./MobileDemo"

export default class Navigation extends React.Component {
  render() {
    //const {name, location} = this.props.service
    //console.log(this.props);
    return (
      <header id="navigation" class="root-sec white nav">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="nav-inner">
                        <nav class="primary-nav">
                            <div class="clearfix nav-wrapper">
                                <a href="#home" class="left brand-logo menu-smooth-scroll" data-section="#home">
                                  <img src="images/logo.png" alt=""/>
                                </a>
                                <a href="#" data-activates="mobile-demo" class="button-collapse"><i
                                        class="mdi-navigation-menu"></i></a>
                                <StaticMenu/>
                                <MobileDemo/>
                                <ul id="dropdown1" class="inline-menu submenu-ul dropdown-content">
                                    <li>Home</li>
                                    <li><a href="blog.html">All Blog</a>
                                    </li>
                                    <li><a href="blog-with-sidebar.html">Blog with Sidebar</a>
                                    </li>
                                    <li><a href="single.html">Single Blog</a>
                                    </li>
                                </ul>

                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>
    );
  }
}
