
export default {
    name: 'Product',    
    props: ['item'],
    template:`
    <ul class="ul">
        <li class="li" v-if="item.isActive && item.hasStock">
            <div class="container">
                <div class="name">
                    {{ item.product }}
                </div>
                <div class="div_pic">
                    <img class="picture" :src= "'/images/' + item.picture" alt="bike pic">
                </div>
                <div class="details">
                    <div class="price">
                        <label for="price">Price:</label>
                            {{ item.price }} €
                    </div>
                    <div class="stock">
                        <label for="stock">Stock:</label>
                            {{ item.stock }}
                    </div>
                    <label id="tags" for="price">Tags:</label>
                    <template class="div_tags" v-for="tag in item.tags">
                        <div class="tags">
                            {{ tag }}
                        </div> 
                    </template>
                    <div class="div_button">
                        <button class="buy_button">Buy</button>
                    </div>
                </div>
            </div>
        </li>
    </ul>
    `    
}