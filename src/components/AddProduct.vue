<template>
  <div>
    Agregar Producto
    <vue-form :state="formState" @submit.prevent="enviar()">

       <validate tag="div">
        <label for="nombre">Nombre</label>
        <input type="text" v-model.trim="formData.nombre" name="nombre" id="nombre" class="form-control" required :minlength="nombreMinLength">

        <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="minlength" class="alert alert-danger mt-1">El nombre de tener como minimo {{nombreMinLength}} caracteres</div>
         </field-messages>
        </validate>

        <validate tag="div">
        <label for="sku">Sku</label>
        <input type="text" v-model.trim="formData.sku" name="sku" id="sku" class="form-control" required :minlength="skuLength">
        
        <field-messages name="sku" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="minlength" class="alert alert-danger mt-1">El sku debe de tener como minimo {{skuLength}} caracteres</div>
        </field-messages>
        </validate>

        <validate tag="div">
        <label for="precio">Precio</label>
        <input type="number" v-model="formData.precio" name="precio" class="form-control" required :min="minimo">
        <field-messages name="precio" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="min" class="alert alert-danger mt-1">El precio minimo es ${{minimo}}.</div>
        </field-messages>
        </validate>

        <validate tag="div">
        <label for="stock">Stock</label>
        <input type="number" v-model="formData.stock" name="stock" class="form-control" required :min="minimo">
        <field-messages name="stock" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="min" class="alert alert-danger mt-1">El stock minimo es ${{minimo}}.</div>
        </field-messages>
        </validate>

        <label for="estado">Estado</label>
        <select name="estado" id="estado" v-model="formData.estado" class="form-control">
            <option value="1">Activo</option>
            <option value="0">Inactivo</option>
        </select>

        <button class="btn btn-primary my-2" :disabled="formState.$invalid">Enviar</button>
    </vue-form>

     
      <pre>Nombre: {{ formData.nombre }}</pre>
      <pre>sku: {{ formData.sku }}</pre>
      <pre>precio: {{ formData.precio }}</pre>
      <pre>stock: {{ formData.stock }}</pre>
       <pre>estado: {{ formData.estado }}</pre>
  </div>
</template>

<script>

export default {
  name: "AddProduct",
  data() {
    return{
        formState : {},
        formData : this.getInicialData(),
        nombreMinLength : 3,
        skuLength:6,
        minimo:1
    }
  },
  methods:{
    getInicialData() {
        return {
          nombre: '',
          sku: '',
          precio: '',
          stock: '',
          estado:'',
        }
    },
    enviar(){
        this.guardarProducto(this.formData)
        this.formData = this.getInicialData() 
        this.formState._reset() 
        
    },
   
  } 
};
</script>