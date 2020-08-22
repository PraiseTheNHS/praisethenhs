<template>
    <div class="card mb-5" data-card="">
        <div class="card-tape"></div>

        <div class="card-body">
            <p class="card-text text-left">The card content</p>
            <div class="card-actions pt-3">
                <div class="card-claps">
                    <button class="btn btn-no-style" data-action="heart">
                        <div class="heart-wrap d-flex align-items-center">
                            <span class="icon-heart hvr-pop pr-1"></span>
                            <span class="clap-count pr-3 mr-2">54</span>
                        </div>
                    </button>

                    <button class="btn btn-no-style" data-action="clap">
                        <div class="clap-wrap d-flex align-items-center">
                            <span class="icon-clap hvr-pop"></span>
                            <span class="clap-count">15</span>
                        </div>
                    </button>
                </div>
                <div class="card-share">
                    <button class="btn btn-no-style">

                    </button>
                    <div class="dropdown">
                        <button class="btn btn-no-style dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="icon-share"></span>
                            Share
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item copy-link" href="praisethenhs.com" id="">Copy link</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="https://twitter.com/intent/tweet?text=I just praised the efforts of the brave NHS workers. Join me in supporting them here. praisethenhs.com">Share on Twitter</a>
                            <a class="dropdown-item d-block d-lg-none" href="whatsapp://send?text=praisethenhs.com" data-action="share/whatsapp/share">Share on Whatsapp</a>
                            <a class="dropdown-item" href="https://www.facebook.com/sharer/sharer.php?u=praisethenhs.com">Share on Facebook</a>
                            <a class="dropdown-item" href="https://www.linkedin.com/shareArticle?mini=true&url=praisethenhs.com&title=&summary=&source=">Share on LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'PraiseCard'
    }
</script>

<style lang="scss">
    div.card {
        position: relative;
        margin: 6rem 1.4rem 3rem;
        border: none;
        border-radius: 0;
        box-shadow: 5px 5px #eaa84f;
        background-color: #fffdf5;

        @include media-breakpoint-up(lg) {
            max-width: 88%;
            margin: 3rem auto 12%;
        }

        button {
            &:focus {
                box-shadow: none;
            }
        }

        .card-tape {
            position: absolute;
            top: -26px;
            left: 50%;
            transform: translate(-50%) rotate(-1deg);
            background-color: #fe9f00;
            height: 37px;
            width: 104px;
        }

        .card-body {
            padding: 3rem;
            padding-bottom: 1.5rem;

            .card-image {
                position: relative;
                background-color: #f2f0ea;
                height: 130px;
                width: 100%;
                background-size: cover !important;
                background-position: center !important;
                border: 1px solid #9a815f;
                margin-bottom: 2.4rem;

                @include media-breakpoint-up(lg) {
                    height: 200px;
                }
            }

            .card-text {
                font-size: 1.8rem;
            }
        }

        .card-actions {
            display: flex;
            justify-content: space-between;

            .card-claps {
                display: flex;
            }

            .btn-no-style {
                background: transparent;
                border: none;
                display: flex;
                align-items: center;
                padding: 0.3rem 0;
                font-size: 1.6rem;

                .icon-heart {
                    font-size: 1.9rem;
                    margin-right: 0.4rem;
                }

                .icon-clap {
                    font-size: 2.4rem;
                    margin-right: 0.4rem;
                }

                .icon-share {
                    font-size: 2rem;
                    padding-right: 0.25rem;
                    margin-right: 0.4rem;
                }
            }
        }
    }
</style>