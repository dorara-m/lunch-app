# ðãã£ã¬ã¯ããªæ§æ

ãã£ã¬ã¯ããªæ§æãã¾ãèªç±åº¦ãé«ããã­ã¸ã§ã¯ãã®ä¿å®æ§ã«é¢ä¿ããã³ã³ãã¼ãã³ãã®è¨­è¨ã¨å¯æ¥ã«é¢ä¿ãããã¾ãã

ãããã£ã¦ãæ¬ç¨¿ã§ã¯
* ãã£ã¬ã¯ããªã§å©ç¨ããã³ã³ãã¼ãã³ã
* ä¾å­é¢ä¿
* ãããã®çç±

ã¨ãã£ãè¦ç¹ããæ´çãã¦ããã¾ãã

ãã¡ããæ©è¦è¡¨ã§ãã
|          | éç½®ããã³ã³ãã¼ãã³ã | å­ãã£ã¬ã¯ããª(components) |           ä¾å­é¢ä¿(åç§å)                | 
| -------- | ----------- | ------------------- | ------------------------ | 
| parts    | parts-component       | ãªã                  | parts                    |           
| features | æå®ç¡ã        | ãã                  | parts, å­ãã£ã¬ã¯ããª           |        
| pages    | æå®ç¡ã        | ãã                  | features, parts, å­ãã£ã¬ã¯ããª |           

## åºæ¬
ã¾ãåãã«ãåã³ã³ãã¼ãã³ãã®ãã¼ã¹ããã¡ãã«ãªãã¾ãã

![baseComponent](./images/components_basic_structure.png)

ã³ã³ãã¼ãã³ãã¯ãã©ã«ããã¨ã«ç®¡çããããã®ä¸­ã«åãã¡ã¤ã«ãæ©è½ãã¨ã«åããã¦ãã¾ãã  

`Component.tsx` ã«ã³ã³ãã¼ãã³ãè¨­è¨ã§ãä¼ãããæ§æã®ãããããå¥ãã`model-component` ãªã©ã®å ´åã¯Hooksãåãåºãããå½¢ã§ãã  
`index.ts` ãç¨æããã¦ããçç±ã¯importã®åé·åãé²ãããã§ããTypescriptã¯ãã©ã«ãç´ä¸ã®index.tsãçç¥ãåç§ãããã¨ãã§ãã¾ãããã¡ãã¯ã`Component.tsx`ã®åå®¹ããã®ã¾ã¾`index.ts`ã«è¨è¿°ãããã¨ããèãæ¹ã®æ¹ãããããããã¾ãããæ¬ãã³ãã¬ã¼ãã§ã¯ãã¨ãã£ã¿ã®æ¤ç´¢æ§åä¸ã®ãããã¡ãã®æ¹å¼ãã¨ã£ã¦ãã¾ãã

ä»¥å¾ãªã¬ã³ã¸è²ã®Componentå³å½¢ãç¾ããå ´åãä¸è¨ã®ãã¡ã¤ã«ãåå«ãããã®ã¨ãã¦ãèª­ã¿ãã ããã


## parts
![parts](./images/parts_structure.png)
ãã®åã®éããã°ã­ã¼ãã«ã«å©ç¨ããã `parts-component` ãæ ¼ç´ããå ´æã§ãã

`Input` ã `Button` ãªã©ãæ±ç¨æ§ã®é«ããã®ãéç½®ããã¾ãããã¹ã¦ã®ã³ã³ãã¼ãã³ããã©ã«ãã¯partsãã©ã«ãç´ä¸ã«éç½®ããããããå¹³ããæ§é ã¨ãªãã¾ãã

ä¾å­é¢ä¿ã¯åä¸éå±¤ã®partsã³ã³ãã¼ãã³ãã®ã¿ã§ãã
ããã¯
* ç¶æãæããªãpropsãªã¬ã¼ã§ããã°åå©ç¨æ§ãæãªãããªããã¨
* model-componentãªã©ã®ç¶æãæã¤ã³ã³ãã¼ãã³ãã«ä¾å­ããã¨ããåå©ç¨æ§ãæ¶ãããã¨

ãçç±ã¨ãªãã¾ãã

è¤éæ§ãå¢ãããatomic designã«ãããatoms, molecules, organismsç¸å½ã®ãã£ã¬ã¯ããªã¯ç¨æãã¦ãã¾ããã  
ã³ã³ãã¼ãã³ããå¢å ãç®¡çãã«ããéã¯ãæ©è½çã«åãã `Inputãã©ã«ã`ã»`Buttonãã©ã«ã`ãªã©ãä½ãã¨è¯ãããããã¾ããã


## features
![features](./images/features_structure.png)
åå©ç¨ããããæ©è½ããéãããã£ã¬ã¯ããªã§ãããã¡ãã¯[bulletproof-react](https://github.com/alan2207/bulletproof-react)ã®è¨­è¨ææ³ãåèã«ãã¦ãã¾ãã  
å·ä½çãªä¾ãæããã¨ããã·ã¥ãã¼ãããã­ãã£ã¼ã«ã§ããããã¼ãã¡ãã¥ã¼ãªã©ãå«ãã¦ãè¯ãããããã¾ãããã«ã¦ã³ã¿ã¼ãªã©ã®ãæ©è½ãã(ãã¾ãä½¿ç¨ä¾ãæãã¤ãã¾ããã) `features`ãã£ã¬ã¯ããªã«å¥ãã¦ãã¾ãã¾ãããã

`features`ãã£ã¬ã¯ããªã§å©ç¨ã§ããã³ã³ãã¼ãã³ãç¨®å¥ã«å¶éã¯ããã¾ãããããã¦ããã°ãç¹å®ã®æ©è½ã§ãããã¨ããå¤é¨ã¨ã®æ¥ç¶ã»ç¶æç®¡çãçºçãããã `model-component` ãç©æ¥µçã«å©ç¨ãããã¯ãã§ãã

ãã­ãã£ã¼ã«ã§ãã¨

1. ContainerãHookså±¤
   * é¡ç»åã®åå¾ãååã®åå¾
   * ã¯ãªãã¯æã«ç»åã¢ããã­ã¼ãã¢ã¼ãã«è¡¨ç¤º
2. Presentationalå±¤
   * htmlã¿ã°ã¨ã¹ã¿ã¤ãªã³ã°

ã¨ããå½¢ã«ãªãããã§ãã
ãã®ãããªå½¢ã§å®ç¾©ãã¦ããã°ãã­ã¸ãã¯ãç¶æãæã¡ããã¤åå©ç¨ã§ããã³ã³ãã¼ãã³ããã¨ãã¦ä½¿ããããã§ãã­ã

* ç¶æãæããªããåå©ç¨æ§ããã â  `partsãã£ã¬ã¯ããª` ã« `parts-component` 
* APIéä¿¡ãç¶æããããã­ã¸ãã¯ããããåå©ç¨æ§ãããã â `featuresãã£ã¬ã¯ããª` ã« `model-component`ãªã©

ã¨ããåãåãããã¾ãããã
<br>
<br>

ããã§ããããæ°ã«ãªããã¨ããä»ã®ã³ã³ãã¼ãã³ã(ãç©æ¥µçã«å©ç¨ãããmodel-componentä»¥å¤)ã¯ã©ãã§å©ç¨ãããã¨ããç¹ã§ãã  

ããã¯ä¸è¨ã®ãã­ãã£ã¼ã«ä¾ã®ãã¯ãªãã¯æã®ç»åã¢ããã­ã¼ãã¢ã¼ãã«ãã«ç¦ç¹ãå½ã¦ãã¨ããããããã§ãããã

ãã­ãã£ã¼ã«ãç´°ååããã¨
* ç»å
* åå
* ã¢ããã­ã¼ãã¢ã¼ãã«

ãªã©ã«åãããã¾ããããã1ã¤ã® `.tsx` ãã¡ã¤ã«ã«ã¾ã¨ãã¦ãã¾ãã¨è¦èªæ§ãä½ãç¶æ³ã«é¥ããã¾ãã  
ãã®ãã`featuresãã£ã¬ã¯ããª` ã«ã¯ `componentsãã£ã¬ã¯ããª` ãç¨æããã¦ããããã®æ©è½ã§å©ç¨ãããã³ã³ãã¼ãã³ãã®ç´°ååãã¾ãã
ããã§ `model-componet` ä»¥å¤ã® `parts-component` ãªã©ãæã¡åºãããããã§ãã  

ä»åã§è¨ãã¨ã¢ããã­ã¼ãã¢ã¼ãã«ãªã©ã¯å¤§ããªæ©è½ã¨ãªãã¾ãã®ã§ãcomponentsã®åé¨ã«`UploadModal`ãåãåºãã¨è¦èªæ§ãä¸ããããã§ãã

è¨äºä¸è¦§ãªã©ãããããããããããã¾ããã
1. featuresç´ä¸ã§ `ArticleList` ã `model-component` ã§ä½ã
2. `componentsãã£ã¬ã¯ããª` ã« `ArticleItem` ã `parts-component` ã§ä½æããè¦ªããpropsãåãåã£ã¦è¡¨ç¤ºãã

ã¨ããæ§æã«ãªãã¾ãã

`componentsãã£ã¬ã¯ããª`ã®çãã¯ãå­ã³ã³ãã¼ãã³ããåããã¨ã«ããè¦èªæ§ãä¿ã¡ã¤ã¤æ©è½ãå°ããªåä½ã«ã¾ã¨ãããããã«ã°ã­ã¼ãã«ã¸ã®ã³ã³ãã¼ãã³ãã®é²åºãé²ããã¨ã ã¨ãããã¨ãæãã¦ãã ããã
<br>
<br>

ä¾å­ãåç§åã¯componentsãã£ã¬ã¯ããªãpartsãã£ã¬ã¯ããªã¨ãªãã¾ãã  
åä¸éå±¤ã®åç§ã¯ãã­ã¸ã§ã¯ããã¨ã«æ±ºå®ãã¾ããããåºæ¬çã«ã¯åä¸éå±¤ã¯åç§ããåä¸æ©è½ã¨ããpagesã§çµã¿ä¸ããæ¹éãè¯ãã§ãã


## pages
![pages](./images/pages_structure.png)
featuresã¨ããä¼¼ããã£ã¬ã¯ããªã¨ãªãã¾ãã

ããããpagesãã£ã¬ã¯ããªãç¨æãã¦ããçç±ã¯[ãã¡ã](https://zenn.dev/yoshiko/articles/99f8047555f700#page)ã®ææ³ã«åã£ã¦ããããã§ãã
> src/pages ä»¥ä¸ã ã¨ãã¡ã¤ã«å = URLã«ãªãã®ã§ãã¡ã¤ã«åã¨ä»ãããã³ã³ãã¼ãã³ãåãå¿ãããä¸è´ããªãã£ãããã«ã¼ãã£ã³ã°ã®å¤æ´ã§ãã£ã¬ã¯ããªéå±¤éã®ãã¡ã¤ã«ã®ç§»åãçºçããã®ã§ããã¡ãã«Componentå®ç¾©ãå·»ãè¾¼ã¿ãããªãã£ãããã§ãã
ãã¡ãããçºå±ãã**ããããã®ãã©ã«ãã¯å¹³ç½®ããããã¹ã**ã§ãããããã¹ããã¦ãã¾ã£ãå ´åä¸ã¤ã®ãã©ã«ãç§»åãé£éãã¦ä»ã«å½±é¿ãä¸ãã¦ãã¾ãããã§ãã

ã¾ããpagesã®ä½¿ç¨æ¦ç¥ã¯SPAãJamstackãµã¤ãå¶ä½ãªã©ã§æ¹éãç°ãªããã¨ãäºæ³ããã¾ãã  

SPAãã¤åå©ç¨ãããæ©è½ãå¤ãå ´åã¯ãfeaturesãã£ã¬ã¯ããªãç©æ¥µçã«å©ç¨ããã¹ãã§ãã  
ä¸æ¹ã§ãSPAã§ãpagesãã¨ã«æ©è½ãç°ãªãå ´åã¯ `pages/Componentå/components` ãããå©ç¨ãããã§ãããã

Jamstackãªwebãµã¤ãå¶ä½ã§ã¯ãpagesä¸»ä½ã§ãã¼ãã®çµã¿ä¸ããåãåãç¨éãå¤ããªãã¾ãããããã£ã¦pagesãã£ã¬ã¯ããªãç©æ¥µå©ç¨ãããã¨ã«ãªãããã§ãã

ãã ã`model-component` ãæ­£ããå©ç¨ãã¦ããã°pagesâfeaturesã®ç§»æ¤ã¯ç°¡åã§ãã  
å³å¯ãªã«ã¼ã«ã®ããã«éããªã£ã¦ãã¾ãã®ã§ããã°ããå±æãå¿è¦ããã§ããã°ç§»ããã¨ããæ°æã¡ã§ãåé¡ãªãããããã¾ããã


##  åè
ãã®é ã¯ã¨ãããããããã®è¨äºã«å©ãããã¾ãããæè¬æè¬ã§ãã  
ã©ããç´ æµãªè¨äºã°ããã§ãã®ã§ããã²èª­ãã§ã¿ã¦ä¸ããã
* [bulletproof-react](https://github.com/alan2207/bulletproof-react) 
* [SPA Componentã®æ¨ããã£ã¬ã¯ããªæ§æã«ã¤ãã¦èªã](https://zenn.dev/yoshiko/articles/99f8047555f700)
* [Reactãã¹ããã©ã¯ãã£ã¹ã®å®åº«ï¼ãbulletproof-reactããåå¼·ã«ãªããããä»¶](https://zenn.dev/meijin/articles/bulletproof-react-is-best-architecture)
* [Reactã®ãã£ã¬ã¯ããªæ§æã§Atomicãã¶ã¤ã³ããããè©±](https://zenn.dev/brachio_takumi/articles/2ab9ef9fbe4159)
* [ç§ã®æ¨ããã­ã³ãã¨ã³ããã£ã¬ã¯ããªæ§æã¨æ°ãã¤ããããã¤ã³ã](https://zenn.dev/sakito/articles/af87061a5016e6)
* [ãReact/Vue.jsãã³ã³ãã¼ãã³ãè¨­è¨ã®ï¼åäººçï¼ãã¹ããã©ã¯ãã£ã¹ | Offers Tech Blog](https://zenn.dev/offers/articles/20220523-component-design-best-practice)
* [Atomic Designãããã¦ãã£ã¬ã¯ããªæ§é ãè¦ç´ããè©±](https://note.com/tabelog_frontend/n/n07b4077f5cf3)

<br>
<br>
<br>

[>>ãðï¸ç¶æç®¡çãã¸é²ã](./state-management.md)