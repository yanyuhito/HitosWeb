<template>
  <v-container>
    <h1 style="padding-top:2%">日常記情</h1>
    <v-row>
      <p style="padding:3%">
        後來的我，每當受情緒包圍時，就會提起手機，將圍住我的繭一絲一絲編織成一匹一匹的文章……
      </p>
    </v-row>
    
    <hr>

    <h1 style="padding-top:3%" id="RandonDaily">不定時日記</h1>
    <v-row>
      <p style="padding-left:3%"><br>待打</p>
    </v-row>

    <v-row>
      <div style="padding-left:8%; padding-bottom:3%">
        <ul style="color: midnightblue">
          <li 
            v-for="(content,i) in dailyContent"
            :key="i"
            >
            <v-dialog width="50%">
              <template v-slot:activator="{on,attrs}">
                <p v-bind="attrs" v-on="on">
                  {{content.date}}
                </p>
              </template>
              <v-card>
                <v-card-text style="color:midnightblue"><br>{{content.text}}<hr><div style="text-align: right">{{content.date}}</div></v-card-text>
              </v-card>
            </v-dialog>
          </li>
        </ul>
      </div>
    </v-row>

    <hr>

    <h1 style="padding-top:3%" id="PinkTrouble">粉色的煩惱</h1>
    <v-row>
      <p style="padding-left:3%"><br>待打</p>
    </v-row>

    <v-row>
      <div style="padding-left:8%; padding-bottom:3%">
        <ul style="color: midnightblue">
          <li 
            v-for="(content,i) in pinkContent"
            :key="i"
            >
            <v-dialog width="50%">
              <template v-slot:activator="{on,attrs}">
                <p v-bind="attrs" v-on="on">
                  {{content.date}}
                </p>
              </template>
              <v-card>
                <v-card-text style="color:midnightblue"><br>{{content.text}}<hr><div style="text-align: right">{{content.date}}</div></v-card-text>
              </v-card>
            </v-dialog>
          </li>
        </ul>
      </div>
    </v-row>

  </v-container>
</template>

<script>
  export default {
    name: 'Daily',
    data: () => ({
      return:{
        dialog:false,
      },

      dailyContent: [
        {
        date:'2019.10.30',
        text:'這是我/我寧願像個傻子/不知世界一切事物/也不願作個先知/洞悉萬物萬事/聰明是美/愚蠢亦是/沒有絕對的好與壞/只有相對的美與醜/活在泡沫之中/迴避現世的大地/我現在至深渴望的/這 就是我',
        },
        {
        date:'2019.11.07',
        text:'手機可以控制一切/但有人可以控制/態度決定一切//熱情 不能熄滅/夢想 得持續找尋/不要自我設限/凡事都可行//錯誤決定 是人生必然/重點是 後續如何處理//保有心中的小王子/銘記當時的初心//簡單來說 被媽媽念owo/每次你都哭超慘/但 然後呢.../你過了那天 你依然過著生活/和起初的樣子沒有任何什麼改變',
        },
      ],

      pinkContent: [
        {
        date:'2020.01.12',
        text:'見著自己喜歡的人有了伴，心中固然是祝福，但我卻只能將自己投射於那人，騙著自己是幸福，如何也填不滿心中的孤寂。而遇見他時，依然假裝自己很好，跟平常一樣，很好，才能維持著朋友的身分，繼續偷偷的，喜歡著你。',
        },
        {
        date:'2020.08.22',
        text:'「當秘密永遠是秘密的時候，傷口就沒有包紮的機會了」——張西《把你的名字曬一曬》。//不用感到抱歉，畢竟愛情本來就不是誰委屈自己，誰歡欣而至，雖然你不愛我，但我知道，你是在乎我的，在乎我的感受，在乎我是否因你而難過，你就是這般的溫柔，如此的體貼，也是我喜歡你的原因。//我要說的是，我已經很感動你出現在我的生命中了。你讓我不用駝著幾噸的秘密，緩緩的走在世界的人群之中，你替我分擔了令我難以呼吸的壓力，你讓我一點一點的將全部都給了你，我的痛苦，我的開心，我的想念，我的喜歡。//我相信只有你能真正明白我所說的，所以不要難過，不要自責，只要知道，我是喜歡你的，我也不希望你因我而煩心。',
        },
      ],
    }),
  }
</script>