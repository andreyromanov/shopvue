<template>
    <div class="admin">
        <div class="page-wrapper default-theme sidebar-bg toggled text-left">
            <nav id="sidebar" class="sidebar-wrapper">
                <div class="sidebar-content">
                    <!-- sidebar-brand  -->
                    <div class="sidebar-item sidebar-brand">
                        <a href="#">Home</a>
                    </div>
                    <!-- sidebar-header  -->
                    <div class="sidebar-item sidebar-header d-flex flex-nowrap">
                        <div class="user-pic">
                            <img class="img-responsive img-rounded" src="@/assets/logo.png" alt="User picture">
                        </div>
                        <div class="user-info">
                            <span class="user-name">Andrii
                                <strong>Romanov</strong>
                            </span>
                            <span class="user-role">{{email}}</span>
                            <span class="user-status">
                                <i class="fa fa-circle"></i>
                                <span>Online</span>
                            </span>
                        </div>
                    </div>
                    <!-- sidebar-search  -->
                    <div class="sidebar-item sidebar-search">
                        <div>
                            <div class="input-group">
                                <input type="text" class="form-control search-menu" placeholder="Search...">
                                <div class="input-group-append">
                                    <span class="input-group-text">
                                        <i class="fa fa-search" aria-hidden="true"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- sidebar-menu  -->
                    <div class=" sidebar-item sidebar-menu">
                        <ul>
                            <li class="header-menu">
                                <span>General</span>
                            </li>
                            <li>
                                <router-link to="/admin/overview">
                                    <i class="fa fa-tachometer-alt"></i>
                                    <span class="menu-text">Overview</span>
                                </router-link>

                            </li>
                            <li>
                                <router-link to="/admin/product">
                                    <i class="fa fa-shopping-cart"></i>
                                    <span class="menu-text">Products</span>
                                 </router-link>

                            </li>
                            <li>
                                <router-link to="/admin/order">
                                    <i class="far fa-gem"></i>
                                    <span class="menu-text">Orders</span>
                                </router-link>

                            </li>
                            <li>
                                <router-link to="/admin/profile">
                                    <i class="far fa-user"></i>
                                    <span class="menu-text">Profile</span>
                                </router-link>

                            </li>
                            <li>
                                <a href="#" @click="logout()">
                                    <i class="fas fa-sign-out-alt"></i>
                                    <span class="menu-text">Logout</span>
                                </a>

                            </li>
                        </ul>
                    </div>
                    <!-- sidebar-menu  -->
                </div>

            </nav>
            <!-- page-content  -->
            <main class="page-content pt-2 text-left">
                <router-view/>
            </main>
            <!-- page-content" -->
        </div>
        <!-- page-wrapper -->
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from "@/components/HelloWorld.vue";
    import {fb} from "../firebase"

    export default {
        name: "admin",
        data(){
            return{
                name: null,
                email:null,

            } 
        },
        components: {
            HelloWorld
        },
        methods:{
            logout(){
                fb.auth().signOut()
                .then((user)=>{
                    this.$router.replace('/');
                })
                .catch((err)=>{
                    console.log(err);
                })
            }
        },
        created(){
            var user = fb.auth().currentUser;
            this.email = user.email;

        }
    };
</script>