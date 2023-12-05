import React from 'react';

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside>
      <div className="description">You can drag these nodes to the pane on the right.</div>

      <div className="dndnode" onDragStart={(event) => onDragStart(event, ' New York Sites')} draggable>
        New York Sites container
      </div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'New Jersey Sites')} draggable>
        New Jersey Sites container
      </div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'Vermont Sites')} draggable>
        Vermont Sites container
      </div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'Massachussets Sites')} draggable>
        Massachussets Sites container
      </div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'California Sites')} draggable>
        California Sites container
      </div>
      <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'New York Sites')} draggable>
      New York Sites 
      </div>
      <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'New Jersey Sites')} draggable>
        New Jersey sites
      </div>
      <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'Vermont Sites')} draggable>
      Vermont Sites sites
      </div>
      <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'Massachussets Sites')} draggable>
      Massachussets Site 
      </div>
      <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'California Sites')} draggable>
        California sites
      </div>
    </aside>
  );
};