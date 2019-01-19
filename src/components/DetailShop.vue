<template>
    <div v-if="shop">
        <b-modal id="modal1" size="lg" hide-footer :title="shop.name" ref="myModalRef">
            <ul class="text-left">
                <li v-if="shop.address">
                    <strong>Dirección:</strong> <span v-if="shop.address.street">{{shop.address.street}}</span><span v-if="shop.address.city">, {{shop.address.city}}</span><span v-if="shop.address.country">, {{shop.address.country}}</span>
                </li>
                <li>
                    <strong>Contacto:</strong>
                        <ul class="contacts-list">
                            <li><span v-if="shop.contact.phone"><font-awesome-icon icon="phone" /> {{shop.contact.phone}}</span></li>
                            <li><span v-if="shop.contact.email"><font-awesome-icon icon="at" /> {{shop.contact.email}}</span></li>
                        </ul>
                </li>
                <li v-if="shop.openingHours">
                    <strong>Horario:</strong> {{shop.openingHours}}
                </li>
            </ul>
            <p class="my-4 text-justify">{{ shop.description }}</p>
            <b-btn class="col-md-2 mt-3 float-right" variant="outline-danger" block @click="hideModal">Cerrar</b-btn>
        </b-modal>
    </div>
</template>

<script>
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { faPhone } from '@fortawesome/free-solid-svg-icons'
    import { faAt } from '@fortawesome/free-solid-svg-icons'

    library.add(faPhone)
    library.add(faAt)

    export default {
        name: 'detail-shop',
        data() {
            return {
                shop: null
            }
        },
        methods: {
            open(shop) {
                this.shop = shop
                this.$refs.myModalRef.show();
            },
            hideModal() {
                this.$refs.myModalRef.hide();
            }
        }
    }
</script>

<style scoped>
    ul {
        list-style: none;
        padding-left: 0;
    }
    .contacts-list {
       padding-left: 20px;
    }
</style>