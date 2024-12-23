Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: ` 
        <div class="product">

            <div class="produtc-image">
                <img v-bind:src="image" v-bind:title="title">
            </div>

            <div class="product-info">
                <h1>{{ title }}</h1>
                <p>{{ marca }}</p>
                <p  v-if="inStock">In Stock</p>
                <p  v-else>Out of Stock</p>
                <p>Shipping: {{ shipping }} </p>
                <p v-show="blackfriday">Black Friday</p>
                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>

                <div v-for="(variant, index) in variants"
                     :key="variant.variantId"
                     class="color-box"
                     :style="{backgroundColor: variant.variantColor}"
                     @mouseover="updateProduct(index)">
                    
                </div>

                <button v-on:click="addToCart"
                        :disabled="!inStock"
                        :class="{ disableButton: !inStock }">Add to Cart</button>

                
            </div>

            <product-tabs :reviews="reviews" @review-submitted="addReview"></product-tabs>


            

        </div>  
    `,
    data() {
        return {

            product: 'Sub-37',
            brand: 'Synt Moog',
            selectedVariant: 0, 
            marca: 'Moog',
            cor: 'Black',
            // inStock: false,
            blackfriday: true,
            details: [
                "Teclas: 27", 
                "Categoria: Sintetizador", 
                "Estado: Novo"],
            variants: [
                {
                    variantId: 0,
                    variantColor: "White",
                    variantImage: './assets/moog.jpg',
                    variantQuantity: 10,
                },
                {
                    variantId: 1,
                    variantColor: "Black",
                    variantImage: './assets/moog.white.jpg',
                    variantQuantity: 0,
                },
            ],
            reviews: []
            
        }
     }, 
    
    methods: {
        addToCart() {  
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
        },
       
         updateProduct(index) {
            this.selectedVariant = index
            console.log(index)
        },
        addReview(productReview) {
            this.reviews.push(productReview)
          }

    },
    computed: {
        title() {
            return this.product + ' - ' + this.brand
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        shipping() {
            if(this.premium) {
                return "Free"
            }
            return 2.99
        }
        
    },
    monted() { 
        eventBus.$on('review-submitted', productReview => {
        this.reviews.push(productReview)
    })
    }

})



Vue.component('product-review', {
    template: `
      <form class="review-form" @submit.prevent="onSubmit">

      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
            <li v-for="error in errors">{{ error }}</li>
        </ul>
       </p>

      <p>
        <label for="name">Name:</label>
        <input id="name" v-model="name" placeholder="name">
      </p>
      
      <p>
        <label for="review">Review:</label>      
        <textarea id="review" v-model="review"></textarea>
      </p>
      
      <p>
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
      </p>
          
      <p>
        <input type="submit" value="Submit">  
      </p>    
    
    </form>

    
    `,
    data() {
        return {
          name: null,
          review: null,
          rating: null,
          errors: []
        }
    },
    methods: {
        onSubmit() {
            if(this.name && this.review && this.rating) {
              let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating
              }
              this.$emit('review-submitted', productReview)
              this.name = null
              this.review = null
              this.rating = null
            } else {
              if(!this.name) this.errors.push("Name required.")
              if(!this.review) this.errors.push("Review required.")
              if(!this.rating) this.errors.push("Rating required.")
            }
          } 
    }
  })
 

  Vue.component('product-tabs', {
    props: {
      reviews: {
        type: Array,
        required: true
      }
    },
    template: `
      <div>
        <div>
          <span class="tab" 
                :class="{ active: selectedTab === index }"
                v-for="(tab, index) in tabs"
                :key="index"
                @click="selectedTab = index">
            {{ tab }}
          </span>
        </div>
        
        <div v-show="selectedTab === 0"> <!-- Aba "Reviews" -->
          <p v-if="!reviews.length">There are no reviews yet.</p>
          <ul v-else>
            <li v-for="(review, index) in reviews" :key="index">
              <p><strong>{{ review.name }}</strong></p>
              <p>Rating: {{ review.rating }}</p>
              <p>{{ review.review }}</p>
            </li>
          </ul>
        </div>
        
        <div v-show="selectedTab === 1"> <!-- Aba "Make a Review" -->
          <product-review @review-submitted="addReview"></product-review>
        </div>
      </div>
    `,
    data() {
      return {
        tabs: ['Reviews', 'Make a Review'], // Textos das abas
        selectedTab: 0 // Aba padrão selecionada
      }
    },
    methods: {
      addReview(productReview) {
        this.$emit('review-submitted', productReview);
        this.selectedTab = 0;
      }
    }
  });
  
  
  
  


var app = new Vue({
    el: '#app',
    data: {
        premium: false,
        cart: []
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        }
    }
})
