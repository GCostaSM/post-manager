<template>
    <div>
        <md-empty-state
          md-icon="devices_other"
          md-label="Posts"
          md-description="Crie um post p/ aprovação">
          <md-button @click="postStep" class="md-primary md-raised">Criar um post</md-button>
        </md-empty-state>

        <md-layout v-for="(template) in templateHtml" :key="template.html">
            
              <md-card  class="md-layout-item md-size-90">
                <div class="pad">
                  <div v-html="template.html"></div>
                  <div>
                      <md-switch v-model="template.reprovado" @change="()=>{ template= switchAprove(false,template);}">Reprovar</md-switch>
                      <md-switch v-model="template.aprovado" @change="()=>{ template= switchAprove(true,template);}" class="md-primary">Aprovar</md-switch>
                  </div>
                </div>
              </md-card>
              
        </md-layout>

    </div>
</template>
<style lang="scss" scoped>
  .md-switch {
    display: flex;
    margin-left:90%;
    margin-right:15%;
  }
  .pad{
    padding:10px;
  }
</style>
<script>
  export default {
    name: 'PostsComponent',
    data: () => ({
      menuVisible: false,
      templateHtml: []      
    }),
    mounted(){
      this.templateHtml = [
          {html:"<body><h1>Setor</h1><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></body>",
            aprovado: true,
            reprovado: false
          },
          {html:"<body><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP7GVQki8A9pkSWQkpMdwjA0NN286SayZ9VZC-FgEitsIXANGF'/><h1>Setor</h1><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></body>",
            aprovado: false,
            reprovado: true
          },
          {html:"<body><div style='float:left;'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP7GVQki8A9pkSWQkpMdwjA0NN286SayZ9VZC-FgEitsIXANGF'/></div><h1>Setor</h1><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></body>",
            aprovado: true,
            reprovado: false
          }
      ]
    },
    methods: {
      toggleMenu () {
        this.menuVisible = !this.menuVisible
      },
      postStep(){
        this.$router.push( '/app/poststep' );
      },
      switchAprove(aprovado,template){
          switch (aprovado){
              case true:
                template.reprovado = false;
                template.aprovado = true;
              break;
              case false:
                template.aprovado = false;
                template.reprovado = true;
              break;
          }
        return template;
      }
    }
  }
</script>