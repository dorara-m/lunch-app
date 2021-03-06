# ð§©ã³ã³ãã¼ãã³ãè¨­è¨
Reactã®ã³ã³ãã¼ãã³ãã¯è¦ãç®ãã­ã¸ãã¯ãç¶æãªã©æ§ããªå½¹å²ãæã¡ã¾ããä¸æ¹ã§è¨è¿°ã®èªç±åº¦ãé«ããããç§©åºã®ãªãã³ã¼ããçã¾ããã¡ã§ãã  
ã¾ããã¹ãã®èªååãã«ã¿ã­ã°åãèæ®ããéãAPIéä¿¡ãç¶æã¨å¯çµåã¯æã¾ããããã¾ããã

ä»¥ä¸ããæ¬ãªãã¸ããªã§ã¯
* è¦ãç®ãããã
* props(å¼æ°)ãæã¤ã
* ç¶æ/ã­ã¸ãã¯ãå«ãã
* å¤é¨ã¨ã®éä¿¡ãæã¤ã
  
ã¨ããè¦³ç¹ããã³ã³ãã¼ãã³ããç´°ååãã¾ãã

ãã¡ããæ©è¦è¡¨ã§ãã

|                 | è¦ãç®(View) | props | ç¶æ(State) | ã­ã¸ãã¯ | APIéä¿¡ | 
| --------------- | --------- | ----- | --------- | ---- | ----- |
| view-component  | â         | Ã     | Ã         | Ã    | Ã     | 
| parts-component | â         | â     | â³         | â³    | Ã     |
| model-component | â         | â³     | â         | â    | â     |
| process-component       | â         | â     | â         | â    | â     |


## view-component
è¦ãç®ã ãã®ã³ã³ãã¼ãã³ãã§ãããç¶æãpropsãæã¡ã¾ããã   
htmlã»cssã®ä»£ããããã³ã³ãã¼ãã³ãã®éç´ã®ããã«å©ç¨ãã¾ãã
```tsx
// ä¾
export const Component = () => {
  return <p>ãµã³ãã«ãã­ã¹ã</p>
}
```

## parts-component
å¼æ°ã«ããViewã®è¡¨ç¤ºãã¤ãã³ãã®çºç«ãæãã³ã³ãã¼ãã³ãã§ããã«ã¿ã­ã°åãããã¹ãã³ã³ãã¼ãã³ãã§ãããåºæ¬çã«ç¶æãæããåé¨ã®æå ±ã¯è¦ªããæ¸¡ããã¾ãã
```tsx
// ä¾
type ButtonProps = {
  handleClick: () => void
  text: string
}

export const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

```


## model-component
ç¶æãæã¤ãã¨ãç®çã®ã³ã³ãã¼ãã³ãã§ããç¶æã¯Local, Globalä¸¡æ¹ãæããã¾ãmodelå±¤ã§ããããå¤é¨ã¨ã®APIé£æºãå¯è½ã§ãã

ã³ã³ãã¼ãã³ãåé¨ã§ç¶æãå®ç¾©ããã¨ãã«ã¿ã­ã°åãå¾ãã®ã³ã³ãã¼ãã³ãåãåºãã®éã«ä¸ä¾¿ã§ãã
ãããã£ã¦`model-component`ã§ã¯`Container/Presentational pattern`ãç¨ãã¦ãã¾ãã

```tsx
import { useCounter } from "./useCounter"
import { Button } from "@/components/parts/Button"

//Container
export const Counter = () => {
  const {count, increment, decrement} = useCounter()
  return (
    <CounterView 
      title={count}
      increment={increment}
      decrement={decrement}
    />
  )
}

//Presentational
type CounterViewProps = {
  title: string;
  increment: () => void;
  decrement: () => void;
}

export const CounterView = (props: CounterViewProps) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <Button onClick={props.increment} text={'+'} />
      <Button onClick={props.increment} text={'-'} />
    </div>
  )
}

```
ä¸è¨ã¯åç´ãªä¾ã§ãããAPIéä¿¡ããã®è¿å´å¤ãè¡¨ç¤ºããã¨ãªãã¨ã¿ã°ã®å¢å ãäºæ³ããã¾ãã

ãã¡ãã®å¯¾å¦æ³ã¨ãã¦ãä»ã®å ´æã§å©ç¨ããå¯è½æ§ãããã³ã³ãã¼ãã³ããä½æããéã¯ã°ã­ã¼ãã«ãª `components/parts` ãã£ã¬ã¯ããªã«ç§»åããã¾ãããã®å ´æã§ããå©ç¨ããªãã³ã³ãã¼ãã³ããåºæ¥ä¸ããéã¯ä¸éå±¤ã« `components` ãã£ã¬ã¯ããªãåãã¾ãããã

[>>ãðãã£ã¬ã¯ããªæ§æãåç§](./directory-structure.md)


## process-component

model-componentã®containerã«propsãç¨æããå¨ã¦ã®ç¹å¾´ãæã¤ã³ã³ãã¼ãã³ãã§ããåç§°ã«å°ãéåæããããããåèªã§å¤æ´ããã ããã°å¹¸ãã§ãã

è¦ªããå­ã¸ã®ç´ç²ãªpropsåãæ¸¡ãã§ããã°`parts-component`ã§äºè¶³ãã¾ãã®ã§ããã¡ãã«æ¸¡ãpropsã¯ä½ããã®å¦çãæ½ããããã¨ã¨ãªãã¾ãã

ãããã£ã¦ã**propsã«æ¸¡ã£ã¦ãããã®ãé¢æ°(ãHooksåæåæã®å¼æ°)ã«æ¸¡ã**ã¨ãããã¿ã¼ã³ãå¤ããªãã¯ãã§ãã
```tsx
// import { useTodoItem } from "./useTodoItem"
import type {Todo} from "../types/useTodo"
//  type Todo = {
//   text: string;
//   id: number;
//   checked: boolean;
// };

//Container
type TodoItemProps = {
  item: Todo;
  onEdit: (id: number, text: string) => void;
  onCheck: (id: number) => void;
}

export const TodoItem = (props:TodoItemProps) => {
  // const {handleEdit, handleCheck} = useTodoItem(props.item.id, props.onEdit, props.onCheck)
  const handleEdit = (event) =>{
    props.onEdit(props.id ,event.target.value)
  }
  const handleCheck = () => {
     props.onCheck(props.id)
  }

  return (
    <TodoItemView 
     item={item}
     handleEdit={handleEdit}
     handleCheck={handleCheck}
    />
)}

//Presentational
type TodoItemViewProps = {
  item:Todo
  handleCheck: () => void;
  handleEdit: (event) => void;
}

export const TodoItemView = (props: TodoItemViewProps) => {
  return (
    <li>
      <input
       type="checkbox"
       checked={props.item.checked}
       onChange={props.handleCheck}
      />
      <input
       type="text"
       disabled={props.item.checked}
       value={props.item.text}
       onChange={props.handleEdit}
      />
    </li>
  )
}
```
èº«è¿ãªToDoãªã¹ããä¾ã«æãã¦ã¿ã¾ããããè¤éãã¯ããããéå¸¸ã®è¨æ³ããå¢ãã¦ããããã«æãã¾ãã

ä¸è¨ã®ä¾ãå°ãªãè¡æ°ã§æ¸ãã¨ä»¥ä¸ã§ãã
```tsx
import type {Todo} from "../types/useTodo"
//  type Todo = {
//   text: string;
//   id: number;
//   checked: boolean;
// };

type Props = {
  item: Todo;
  onEdit: (id: number, text: string) => void;
  onCheck: (id: number) => void;
}

export const TodoItem = (props: Props) => {
  return (
    <li>
      <input
       type="checkbox"
       checked={props.item.checked}
       onChange={() => onCheck(props.item.id)}
      />
      <input
       type="text"
       disabled={props.checked}
       value={props.text}
       onChange={(e) => onEdit(props.item.id, e.target.value)}
      />
    </li>
  )
}
```
ã¹ãã­ãªãã¾ãããåäººçã«ããã¡ããå¥½ãã§ããä¸æ¹ã§ãã³ã³ãã¼ãã³ãåé¨ã«é¢æ°ãå®ç¾©ããã¦ãããªã©ã­ã¸ãã¯ãviewå´ã«é²åºãã¦ããæ¸å¿µãããã¾ãã  

ãã®ï¼ã¤ç®ã¨2ã¤ç®ãã©ã¡ããé©ããè¨æ³ãªã®ã§ããããã

ããããèããã¹ãã¯ãããããä½ã®ããã«`Container/Presentational Pattern`ãç¨ãã¦ãããã¨ãããã¨ã§ãã

ããã¯å¤§ã¾ãã«åãã¦
* ã³ã³ãã¼ãã³ãå
* ã«ã¿ã­ã°å(Storybookã¸ã®ç»é²ãããã)
* ãã¹ããããã

ã®ããã§ããã

ãã®è¦³ç¹ããè¦ãã¨
* Hooksãåãåºããã¨ããã§ãã¹ãã®å¿è¦ããªã
* ï¼ã¤ç®ã®ã³ã³ãã¼ãã³ãã§ãStorybookã¸ã®ç»é²ã«åé¡ã¯ãªã
* ä»åã®ã±ã¼ã¹ã§ã¯ããã¹ãã¯Hooksã§ã¯ãªãã³ã³ãã¼ãã³ãã«å¯¾ãã¦è¡ãããã¹ã

ã¨ãããã¨ããããã¾ããä»åã®ä¾ã¯ `parts-component` ã®æ¡å¼µã¨ãã¦ãæããããã§ãããã
<br>
<br>

ããã¾ã§ããããæ¹ãèæ¡ããã¦ããããã«ãããããæ­£è§£ãã¨ããã³ã³ãã¼ãã³ãè¨­è¨ã¯ããããããã¾ããã

ä»åã®ãããªã±ã¼ã¹ã®ããã«ããã«ã¿ã­ã°å/ãã¹ããå¯è½ã§ããã°é¢æ°ã®å®ç¾©ã¯OKããªã©ã®ã«ã¼ã«ãå®ãã¦ããã¨å®å¿ãã¦ãã­ã¸ã§ã¯ããé²ãããããã§ãã

<br>
<br>
<br>

[>>ãðãã£ã¬ã¯ããªæ§æãã¸é²ã](./directory-structure.md)
