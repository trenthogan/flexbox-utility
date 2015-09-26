**FLEXBOX UTILITY**

Flexbox utility classes ...

To install with bower run:
```
bower info flexbox-utility
```

Add Display Flex To Item
```css
.flex {
  display: flex;
}
```
Set Flex Items To Display In A Row ... This Is The Default So This Would Only Be Used As An Override ...
```css
.flex-row {
  flex-direction: row;
}
```
Sets The Flex Items To Display In A Column So They Will Be Stacked Vertically
```css
.flex-column {
  flex-direction: column;
}
```
Vertical Centering Without Pre Flexbox Hacks :)
```css
.flex-center {
  align-items: center;
  justify-content: center;
}
```

Vertical Centering For Flex Items If The Main Axis Is Set To Row Or Horizontal Centering If The Main Axis Is Set To Column
```css
.flex-align-items-center {
  align-items: center;
}
```
Horizontal Centering For Flex Items If The Main Axis Is Set To Row Or Vertical Centering If The Main Axis Is Set To Column
```css
.flex-justify-content-center {
  justify-content: center;
}
```
Will Align The Flex Items Vertically To The Top Of The Container If The Main Axis Is Set To Row
```css
.flex-row-top {
  align-items: flex-start;
}
```
Will Align The Flex Items Vertically To The Top Of The Container If The Main Axis Is Set To Column
```css
.flex-column-top {
  justify-content: flex-start;
}
```
Will Align The Flex Items Vertically To The Bottom Of The Container If The Main Axis Is Set To Row
```css
.flex-row-bottom {
  align-items: flex-end;
}
```
Will Align The Flex Items Vertically To The Bottom Of The Container If The Main Axis Is Set To Column
```css
.flex-column-bottom {
  justify-content: flex-end;
}
```
Will Align The Flex Items Horizontally To The Left Of The Container If The Main Axis Is Set To Row
```css
.flex-row-left {
  justify-content: flex-start;
}
```
Will Align The Flex Items Horizontally To The Left Of The Container If The Main Axis Is Set To Column
```css
.flex-column-left {
  align-items: flex-start;
}
```
Will Align The Flex Items Horizontally To The Right Of The Container If The Main Axis Is Set To Row
```css
.flex-row-right {
  justify-content: flex-end;
}
```
Will Align The Flex Items Horizontally To The Right Of The Container If The Main Axis Is Set To Column
```css
.flex-column-right {
  align-items: flex-end;
}
```
