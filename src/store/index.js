import { createStore } from 'vuex'

export default createStore({
  state: {
    categories:[
      {
        id:1,
        name:"legumes",
        icons:"carrot"
      },
      {
        id:2,
        name:"Fruit",
        icons:"apple-whole"
      },
      {
        id:3,
        name:"electronique",
        icons:"bolt"
      },
      {
        id:4,
        name:"maquignage",
        icons:"coffee"
      }
    ],
    productlist:[
          {
            id:'1',
            imageUrl:"http://www.bhphotovideo.com/images/images2500x2500/nikon_d750_dslr_camera_with_1082604.jpg",
            img1:"https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg",
            img2:"https://media.istockphoto.com/photos/podium-display-with-monstra-deliciosa-and-frosted-glass-copy-space-picture-id1219737366?k=20&m=1219737366&s=612x612&w=0&h=UD2LtTMVLiTJ9mlFckeqaA6sk93yg2bPj98QU4eZeBo=",
            img3:"https://media.istockphoto.com/photos/podium-display-on-beige-background-with-palm-tree-leaf-tropical-picture-id1219741106?b=1&k=20&m=1219741106&s=612x612&w=0&h=grZvCv_nIBzCbUszei5J6mmY8fKdlPN8RhU_aiVhIpI=",
            prodName:"MacBook pro 14 pouces MacBook pro",
            prodPrix:500000,
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. At earum quibusdam sint nisi exercitationem repellat itaque unde esse expedita? Nulla ex consequatur officiis blanditiis voluptatibus. Sed architecto quos dicta officia.",
            iSpopula:true,
            categorie:1,
            isAddToCart:false
        },
        {
            id:'2',
            imageUrl:"https://img.freepik.com/free-vector/white-product-podium-with-green-tropical-palm-leaves-golden-round-arch-green-wall_87521-3023.jpg",
            img1:"https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg",
            img2:"https://media.istockphoto.com/photos/podium-display-with-monstra-deliciosa-and-frosted-glass-copy-space-picture-id1219737366?k=20&m=1219737366&s=612x612&w=0&h=UD2LtTMVLiTJ9mlFckeqaA6sk93yg2bPj98QU4eZeBo=",
            img3:"https://media.istockphoto.com/photos/podium-display-on-beige-background-with-palm-tree-leaf-tropical-picture-id1219741106?b=1&k=20&m=1219741106&s=612x612&w=0&h=grZvCv_nIBzCbUszei5J6mmY8fKdlPN8RhU_aiVhIpI=",
            prodName:"MacBook pro 14 pouces",
            prodPrix:500000,
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. At earum quibusdam sint nisi exercitationem repellat itaque unde esse expedita? Nulla ex consequatur officiis blanditiis voluptatibus. Sed architecto quos dicta officia.",
            iSpopula:true,
            categorie:1,
            isAddToCart:false

        },
        {
            id:'3',
            imageUrl:"https://st4.depositphotos.com/1500360/39079/i/600/depositphotos_390794216-stock-photo-amber-glass-eye-dropper-bottles.jpg",
            img1:"https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg",
            img2:"https://media.istockphoto.com/photos/podium-display-with-monstra-deliciosa-and-frosted-glass-copy-space-picture-id1219737366?k=20&m=1219737366&s=612x612&w=0&h=UD2LtTMVLiTJ9mlFckeqaA6sk93yg2bPj98QU4eZeBo=",
            img3:"https://media.istockphoto.com/photos/podium-display-on-beige-background-with-palm-tree-leaf-tropical-picture-id1219741106?b=1&k=20&m=1219741106&s=612x612&w=0&h=grZvCv_nIBzCbUszei5J6mmY8fKdlPN8RhU_aiVhIpI=",
            prodName:"MacBook pro 14 pouces",
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. At earum quibusdam sint nisi exercitationem repellat itaque unde esse expedita? Nulla ex consequatur officiis blanditiis voluptatibus. Sed architecto quos dicta officia.",
            prodPrix:500000,
            categorie:2,
            iSpopula:true,
            isAddToCart:false

        },
        {
            id:'4',
            imageUrl:"https://burst.shopifycdn.com/photos/wrist-watches.jpg",
            img1:"https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg",
            img2:"https://media.istockphoto.com/photos/podium-display-with-monstra-deliciosa-and-frosted-glass-copy-space-picture-id1219737366?k=20&m=1219737366&s=612x612&w=0&h=UD2LtTMVLiTJ9mlFckeqaA6sk93yg2bPj98QU4eZeBo=",
            img3:"https://media.istockphoto.com/photos/podium-display-on-beige-background-with-palm-tree-leaf-tropical-picture-id1219741106?b=1&k=20&m=1219741106&s=612x612&w=0&h=grZvCv_nIBzCbUszei5J6mmY8fKdlPN8RhU_aiVhIpI=",
            prodName:"MacBook pro 14 pouces",
            prodPrix:500000,
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. At earum quibusdam sint nisi exercitationem repellat itaque unde esse expedita? Nulla ex consequatur officiis blanditiis voluptatibus. Sed architecto quos dicta officia.",
            categorie:2,
            iSpopula:true,
            isAddToCart:false

        },
        {
            id:'5',
            imageUrl:"https://cdn.shopify.com/s/files/1/0070/7032/files/image5_4578a9e6-2eff-4a5a-8d8c-9292252ec848.jpg?v=1620247043",
            img1:"https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg",
            img2:"https://media.istockphoto.com/photos/podium-display-with-monstra-deliciosa-and-frosted-glass-copy-space-picture-id1219737366?k=20&m=1219737366&s=612x612&w=0&h=UD2LtTMVLiTJ9mlFckeqaA6sk93yg2bPj98QU4eZeBo=",
            img3:"https://media.istockphoto.com/photos/podium-display-on-beige-background-with-palm-tree-leaf-tropical-picture-id1219741106?b=1&k=20&m=1219741106&s=612x612&w=0&h=grZvCv_nIBzCbUszei5J6mmY8fKdlPN8RhU_aiVhIpI=",
            prodName:"MacBook pro 14 pouces",
            prodPrix:500000,
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. At earum quibusdam sint nisi exercitationem repellat itaque unde esse expedita? Nulla ex consequatur officiis blanditiis voluptatibus. Sed architecto quos dicta officia.",
            categorie:3,
            iSpopla:true,
            isAddToCart:false

        },
        {
            id:'6',
            imageUrl:"https://www.apple.com/v/product-red/v/images/meta/og_world_aids__ccal5yhp82b6_day.png",
            img1:"https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg",
            img2:"https://media.istockphoto.com/photos/podium-display-with-monstra-deliciosa-and-frosted-glass-copy-space-picture-id1219737366?k=20&m=1219737366&s=612x612&w=0&h=UD2LtTMVLiTJ9mlFckeqaA6sk93yg2bPj98QU4eZeBo=",
            img3:"https://media.istockphoto.com/photos/podium-display-on-beige-background-with-palm-tree-leaf-tropical-picture-id1219741106?b=1&k=20&m=1219741106&s=612x612&w=0&h=grZvCv_nIBzCbUszei5J6mmY8fKdlPN8RhU_aiVhIpI=",
            prodName:"MacBook pro 14 pouces",
            prodPrix:500000,
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. At earum quibusdam sint nisi exercitationem repellat itaque unde esse expedita? Nulla ex consequatur officiis blanditiis voluptatibus. Sed architecto quos dicta officia.",
            categorie:3,
            iSpopula:false,
            isAddToCart:false

        },
        {
          id:'7',
          imageUrl:"https://cdn.pixabay.com/photo/2020/05/26/09/32/product-5222398_960_720.jpg",
          img1:"https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg",
          img2:"https://media.istockphoto.com/photos/podium-display-with-monstra-deliciosa-and-frosted-glass-copy-space-picture-id1219737366?k=20&m=1219737366&s=612x612&w=0&h=UD2LtTMVLiTJ9mlFckeqaA6sk93yg2bPj98QU4eZeBo=",
          img3:"https://media.istockphoto.com/photos/podium-display-on-beige-background-with-palm-tree-leaf-tropical-picture-id1219741106?b=1&k=20&m=1219741106&s=612x612&w=0&h=grZvCv_nIBzCbUszei5J6mmY8fKdlPN8RhU_aiVhIpI=",
          prodName:"MacBook pro 14 pouces",
          prodPrix:500000,
          description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. At earum quibusdam sint nisi exercitationem repellat itaque unde esse expedita? Nulla ex consequatur officiis blanditiis voluptatibus. Sed architecto quos dicta officia.",
          categorie:4,
          iSpopula:false,
          isAddToCart:false

        },
        {
          id:'8',
          imageUrl:"https://c1.neweggimages.com/ProductImage/26-323-184-01.jpg",
          img1:"https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg",
          img2:"https://media.istockphoto.com/photos/podium-display-with-monstra-deliciosa-and-frosted-glass-copy-space-picture-id1219737366?k=20&m=1219737366&s=612x612&w=0&h=UD2LtTMVLiTJ9mlFckeqaA6sk93yg2bPj98QU4eZeBo=",
          img3:"https://media.istockphoto.com/photos/podium-display-on-beige-background-with-palm-tree-leaf-tropical-picture-id1219741106?b=1&k=20&m=1219741106&s=612x612&w=0&h=grZvCv_nIBzCbUszei5J6mmY8fKdlPN8RhU_aiVhIpI=",
          prodName:"MacBook pro 14 pouces",
          prodPrix:500000,
          description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. At earum quibusdam sint nisi exercitationem repellat itaque unde esse expedita? Nulla ex consequatur officiis blanditiis voluptatibus. Sed architecto quos dicta officia.",
          categorie:4,
          iSpopula:false,
          isAddToCart:false

        },
        {
          id:'9',
          imageUrl:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
          img1:"https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg",
          img2:"https://media.istockphoto.com/photos/podium-display-with-monstra-deliciosa-and-frosted-glass-copy-space-picture-id1219737366?k=20&m=1219737366&s=612x612&w=0&h=UD2LtTMVLiTJ9mlFckeqaA6sk93yg2bPj98QU4eZeBo=",
          img3:"https://media.istockphoto.com/photos/podium-display-on-beige-background-with-palm-tree-leaf-tropical-picture-id1219741106?b=1&k=20&m=1219741106&s=612x612&w=0&h=grZvCv_nIBzCbUszei5J6mmY8fKdlPN8RhU_aiVhIpI=",
          prodName:"MacBook pro 14 pouces",
          prodPrix:500000,
          description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. At earum quibusdam sint nisi exercitationem repellat itaque unde esse expedita? Nulla ex consequatur officiis blanditiis voluptatibus. Sed architecto quos dicta officia.",
          categorie:1,
          iSpopula:false,
          isAddToCart:false

        }, 
        
    ],
    cart:[],
    cartlen:0
  },
  getters: {
    getcartlen(state){
      return state.cart.length
    }
  },
  mutations: {
    addcart(state,produit){
      for(let product_ of state.productlist){
        if(product_==produit){
          product_.isAddToCart=true
          state.cart.push( product_ )
  
          console.log(this.state.cart.length)
        }      
      }
    },
    delcartproduct(state,produit){

      for(let product_ of state.productlist){
        if(product_==produit){
          product_.isAddToCart=false
        }
      }
      let i=0
      for(let product_ of state.cart){
        if(product_==produit){
            state.cart.splice(i,1)
           
            console.log(this.state.cart.length)

        }
        i=i+1
      }

    },
    updateCartlen(state){
      state.cartlen=state.cart.length
      console.log(state.cartlen)
    },
    
  },
 
  actions: {
    add_cart_action(context,payload){
      context.commit('addcart',payload)
    },
    del_cart_action(context,payload){
      context.commit('delcartproduct',payload)
    },
    updateCartlen(context){
      context.commit('updateCartlen')
    
    }
  },
  modules: {
  }
})
