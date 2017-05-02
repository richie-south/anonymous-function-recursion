# Laiva

[![npm version](https://badge.fury.io/js/laiva.svg)](https://badge.fury.io/js/laiva)    

Anonymous function recursion.  

# Installation

```
npm install laiva --save
```

# Usage

## Summary

* [laiva](#laiva)


## laiva

### Syntax  

```javascript
const result = laiva(v => v === 10, v => v+1, 0)
```

### Parameters

- condition: function
  - condition to be fulfilled.
- remodele: function
  - should update value so it can ve fulfilled.
- initialValue: any
  - start value

### Return value

any
