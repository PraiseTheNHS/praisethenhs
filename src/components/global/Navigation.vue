<template>
    <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-white">
        <div class="container">
            <a class="navbar-brand" href="/"><span class="icon-logo-yellow"></span></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto d-none d-lg-block">
                    <li class="nav-item scroll-hidden">
                        <a href="/create" class="btn btn-large btn-white toggle-form btn-icon"><span class="icon-plus"></span> Create a post</a>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/about">About</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style lang="scss">
    .navbar-light {
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.14);

        .navbar-brand {
            font-size: 2.8rem;
        }

        .navbar-nav {
            .nav-item {
                .nav-link {
                    padding: 2rem 2rem 3rem 2rem;
                    font-weight: bold;
                    color: #000;
                }
            }
        }
    }
</style>

<script>
    export default {
        name: 'Navigation'
    }
</script>