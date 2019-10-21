<template>
  <div>
    <md-steppers :md-active-step.sync="active" md-linear>
      <md-step id="first" md-label="Escolha o template"  :md-done.sync="first">
            <div class="md-layout">
                    <md-card  v-for="template in templateHtml" :key="template.html" md-with-hover class="md-layout-item md-size-25">
                        <div v-html="template.html" @click="setHtml(template.html)"></div>
                    </md-card>
            </div>
      </md-step>

      <md-step id="second" md-label="Editar" :md-error="secondStepError" :md-done.sync="second">
            <div class="md-layout">
                <md-card class="md-layout-item md-size-70">
                    <div v-html="selectedHtml"></div>
                </md-card>
            </div>

            <md-field>
            <label>Html</label>
            <md-textarea v-model="selectedHtml"></md-textarea>
            </md-field>

        <md-button class="md-raised md-primary" @click="setDone('second', 'third')">Continue</md-button>
        <md-button class="md-raised md-primary" @click="setError()">Set error!</md-button>

      </md-step>

      <md-step id="third" md-label="Preview" :md-done.sync="third">
            <div class="md-layout">
                <md-card class="md-layout-item md-size-90">
                    <div v-html="selectedHtml"></div>
                </md-card>
            </div>
        <md-button class="md-raised md-primary" @click="setDone('third')">Criar Post</md-button>
      </md-step>
    </md-steppers>
  </div>
</template>

<script>
  export default {
    name: 'PostStepComponent',
    data: () => ({
      active: 'first',
      first: false,
      second: false,
      third: false,
      secondStepError: null,
      templateHtml:[
          {html:"<body><h1>Setor</h1><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></body>"},
          {html:"<body><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP7GVQki8A9pkSWQkpMdwjA0NN286SayZ9VZC-FgEitsIXANGF'/><h1>Setor</h1><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></body>"},
          {html:"<body><div style='float:left;'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP7GVQki8A9pkSWQkpMdwjA0NN286SayZ9VZC-FgEitsIXANGF'/></div><h1>Setor</h1><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></body>"}
          ],
      selectedHtml:""
    }),
    methods: {
      setDone (id, index) {
        this[id] = true

        this.secondStepError = null
        this.selectedHtml = this.selectedHtml;
        if (index) {
          this.active = index
        }
      },
      setError () {
        this.secondStepError = 'This is an error!'
      },
      setHtml(html){
          this.selectedHtml = html;
          this.setDone('first', 'second');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .md-steppers {

  }
</style>
