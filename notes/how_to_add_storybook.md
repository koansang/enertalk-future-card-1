# Storybook에 신규 component 추가 방법

[스토리북 설정](https://github.com/yongdamsh/enertalk-future-card/blob/split_DailyColumnChart/.storybook/config.js)으로 src 하위 경로에서 `.stories.js` extension을 가진 파일에 대해 import 가능

### Import `storiesOf` method
```js
import { storiesOf } from '@kadira/storybook';
```

### Import Component
```js
import React from 'react';
import MyComponent from './MyComponent.jsx';
```

> Note:  
> 현재 storybook 설정 상으로는 js 이외의 확장자인 경우 명시해줘야 함

### Use `storiesOf` method
```js
storiesOf(<추가할 항목 title>, module)
    .add(<description>, () => {
        const props = {...};

        return (
            <MyComponent {...props} />
        );
    });
```

### Import and Use addons
해당 component의 명세에 따라 필요한 addon 추가 가능  
아래 예제는 prop을 storybook 상에서 변경할 수 있도록 form을 제공해주는 knobs addon
```js
import { text, number, select } from '@kadira/storybook-addon-knobs';

const props = {
    myText: text('textLabel', vaule),
    myNumber: number('numberLabel', number),
    mySelectBox: select('selectLabel', {
        key1: 'option1',
        key2: 'option2',
        key3: 'option3',
    }, 'key1')
};
```

### References
* [Storybook documentation](https://getstorybook.io/docs)
* [Knobs addon](https://github.com/kadirahq/storybook-addon-knobs)
