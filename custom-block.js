/* This section of the code registers a new block, sets an icon and a category, and indicates what type of fields it'll include. */
  
wp.blocks.registerBlockType('custom/custom-box', {
  title: 'Custom Box',
  icon: 'art',
  category: 'formatting',
  attributes: {
    text: {type: 'string'},
    color: {type: 'string'}
  },
  
/* This configures how the content and color fields will work, and sets up the necessary elements */
  
  edit: function(props) {
    function updateContent(event) {
      props.setAttributes({text: event.target.value})
    }
    function updateColor(value) {
      props.setAttributes({color: value.hex})
    }
    return React.createElement("div",null,
      React.createElement("h4",null,"Custom Box"),
      React.createElement("input", { type: "text", value: props.attributes.text, onChange: updateContent }),
      React.createElement(wp.components.ColorPicker, { color: props.attributes.color, onChangeComplete: updateColor })
    );
  },
  save: function(props) {
    return wp.element.createElement(  
      "h4",
      { style: { color:   props.attributes.color } },
      props.attributes.text
    );
  }
})