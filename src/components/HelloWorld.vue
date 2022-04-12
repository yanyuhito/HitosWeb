<template>
  <v-container>
    <v-row class="text-center">

      <v-col
        class="mb-5"
        cols="12"
        style="padding:50px"
      >
        <h2 class="headline font-weight-bold mb-3">
          家庭天地
        </h2>
        <h4 style="color:gray">高一時做的自主學習</h4>
        <br>

        <v-row justify="center">
          <v-spacer></v-spacer>
          <v-col
            v-for="(name,i) in bottomName"
            :key="i"
          >
            <v-tooltip bottom>
              <template v-slot:activator="{on, attrs}">
                <v-btn
                  outlined
                  x-large
                  v-bind="attrs"
                  v-on="on"
                  :to="name.to"
                >{{name.text}}</v-btn> 
              </template>
              <span>{{name.tooltip}}</span>
            </v-tooltip>
            <v-spacer></v-spacer>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
      </v-col>
    </v-row>
      <hr>
    <v-row class="text-center">
      <v-col
        class="mb-5"
        cols="12"
        style="padding:70px 70px 50px"
      >
        <h2 class="headline font-weight-bold mb-3" >
          日常記情
        </h2>
        <h4 style="color:gray">平日下心情的結晶</h4>
        <br>
        <v-row class="text-center">
          <v-spacer></v-spacer>
          <v-col
            v-for="(link, i) in daily"
            :key="i"
            cols="4">
            <v-tooltip bottom>
              <template v-slot:activator="{on, attrs}">
                <v-btn
                  outlined
                  x-large
                  :to="link.to"
                  v-bind="attrs"
                  v-on="on"
                  class="subheading mx-3"
                >
                  {{ link.text }}
                </v-btn>
              </template>
              <span>{{ link.tooltip }}</span>
            </v-tooltip>
            <v-spacer></v-spacer>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({

      daily: [
        {
          text: '不定時日記',
          tooltip:'聽說心情不好時產量特高',
          to: '/daily#RandonDaily',
        },
        {
          text: '粉色的煩惱',
          tooltip:'少年維特對於愛情的困擾',
          to: '/daily#PinkTrouble',
        },
      ],

      bottomName: [
        {
          text:'沂佐篇',
          tooltip:'關於作者本人的趣味小事',
          to:'/my_family#Hito',
        },
        {
          text:'媽媽篇',
          tooltip:'母親從小到大的粗神經事件',
          to:'/my_family#Mom',
        },
        {
          text:'爸爸篇',
          tooltip:'嚴厲的父親也會有邏輯爆炸的時候',
          to:'/my_family#Dad',
        },
        {
          text:'阿公阿婆篇',
          tooltip:'人老心年輕的長輩碰撞出的故事',
          to:'/my_family#grandparents',
        },
      ],
    }),
  }
</script>
