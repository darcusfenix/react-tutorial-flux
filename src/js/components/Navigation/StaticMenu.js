import React from "react";

export default class StaticMenu extends React.Component {
  render() {
    return (
        <ul class="right static-menu">
            <li class="search-form-li">
                <a id="initSearchIcon" class=""><i class="mdi-action-search"></i> </a>
                <div class="search-form-wrap hide">
                    <form action="#" class="">
                        <input type="search" class="search"/>
                        <button type="submit"><i class="mdi-action-search"></i>
                        </button>
                    </form>
                </div>
            </li>
            <li>
                <a class="dropdown-button blog-submenu-init" href="#!" data-activates="dropdown1">
                    <i class="mdi-navigation-more-vert right"></i>
                </a>
            </li>
        </ul>
    );
  }
}
