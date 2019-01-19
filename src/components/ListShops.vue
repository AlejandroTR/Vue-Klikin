<template>
    <div>
        <h1>{{ title }}</h1>
        <div class="container">
            <b-card-group columns class="shop">
                <b-card v-for="shop in shops"
                        :title="shop.name"
                        :img-src="shop.logo ? shop.logo.thumbnails.medium : 'https://blog.stylingandroid.com/wp-content/themes/lontano-pro/images/no-image-slide.png'"
                        img-fluid
                        img-alt="image"
                        img-top
                        @click="showShopModal(shop)">
                    <p class="card-text" v-if="shop.description">
                        {{ shop.description | truncate(300) }}
                    </p>
                </b-card>
            </b-card-group>
        </div>
        <detail-shop ref="detailModalShop"></detail-shop>
    </div>
</template>

<script>
    import DetailShop from '@/components/DetailShop'

    export default {
        name: 'list-shops',
        components: {
            'detail-shop': DetailShop
        },
        data() {
            return {
                title: 'Listado de comercios',
                shops: []
            }
        },
        methods: {
            getShops() {
                this.$http.get('https://stag.klikinlabs.com/commerces/public?active=true&fields=address&fields=contact&fields=social&fields=name&fields=category&fields=description&fields=openingHours&fields=features&fields=photos&fields=logo&fields=location').then(response => {
                    this.shops = response.body;
                }, response => {
                    this.title = 'El servidor no responde'
                });
            },
            showShopModal(shop) {
                this.$refs.detailModalShop.open(shop);
            }
        },
        created() {
            this.getShops();
        }
    }
</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
    }
    .shop {
        cursor: pointer;
    }
</style>
