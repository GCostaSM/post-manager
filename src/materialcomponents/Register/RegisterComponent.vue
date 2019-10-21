<template>
  <div>
    <form class="md-layout">
        <md-card md-with-hover class="md-layout-item md-size-40">
          <md-ripple>
            <md-card-header>
              <div class="md-title">Login</div>
            </md-card-header>
                <md-card-content>
                    <md-field>
                        <label for="email">Username</label>
                        <md-input type="email" name="email" id="email"/>
                        <span class="md-error">Username Required</span>
                        <span class="md-error">Invalid username</span>
                    </md-field>
                    <md-field>
                        <label for="email">Password</label>
                        <md-input type="password" name="password" id="password"  />
                        <span class="md-error">password Required</span>
                        <span class="md-error">Invalid password</span>
                    </md-field>
                </md-card-content>
            <md-card-actions>
              <md-button v-on:click="login">Login</md-button>
            </md-card-actions>
          </md-ripple>
        </md-card>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RegisterComponent',
  methods:{
      login (){
          this.$router.push( '/app' );
      }
  }
}
</script>