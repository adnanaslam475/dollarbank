import React, { useState } from "react";
import {
    DragDropContext, Draggable,
    Droppable
} from "react-beautiful-dnd";
import { uuid } from "uuidv4";
import { createTheme, ThemeProvider } from '@material-ui/core'
// import FullscreenExitOutlinedIcon from '@material-ui/icons/FullscreenOutlined';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import classes from './Dragger.module.scss';
import ArrowRight from '../../assets/ArrowRight.png';
import Composite from '../../assets/Composite.png'

const theme = createTheme({
    props: {
        MuiSvgIcon: {
            htmlColor: '#2774AE',
        }
    }
})

const itemsFromBackend = [
    { id: uuid(), content: "Getting my statement in the mail" },
    { id: uuid(), content: "Earning interest on my balance" },
    { id: uuid(), content: "Visiting an ATM to get cash" },
    { id: uuid(), content: "Writing checks" },
];

const columnsFromBackend = {
    [uuid()]: {
        items: itemsFromBackend,
        color: '#fff'
    },
    [uuid()]: {
        items: [],
        color: '#EEEEEE',
    }
};

const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...sourceColumn,
                items: sourceItems
            },
            [destination.droppableId]: {
                ...destColumn,
                items: destItems
            }
        });
    } else {
        const column = columns[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...column,
                items: copiedItems
            }
        });
    }
};

function Dragger() {
    const [columns, setColumns] = useState(columnsFromBackend);
    return (
        <ThemeProvider theme={theme}>
            <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
                <DragDropContext
                    onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
                >
                    {Object.entries(columns).map(([columnId, column], index) => {
                        return (
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                                key={columnId}>

                                <p className={classes.DragHeading}
                                    style={{ marginBottom: '1rem', color: '#2774AE' }}>
                                    {(column.color == '#EEEEEE' && column.items.length == 0) ? <p
                                        style={{ color: 'black' }} >Drag your choices here</p> : <p
                                            style={{ marginTop: '2.2rem' }}></p>}</p>
                                <div style={{ margin: '0px 50px' }}>
                                    <Droppable droppableId={columnId} key={columnId}>
                                        {(provided, snapshot) => {
                                            return (
                                                <div
                                                    className={classes.Dragger}
                                                    {...provided.droppableProps}
                                                    ref={provided.innerRef}
                                                    style={{
                                                        backgroundColor: column.color,
                                                        border: (column.color == '#EEEEEE' &&
                                                            column.items.length == 0) && '1px solid lightgray',
                                                        borderRadius: (column.color == '#EEEEEE' &&
                                                            column.items.length == 0) && '20px',
                                                    }}>
                                                    {(column.color == '#EEEEEE' && column.items.length == 0) ? <img
                                                        src={Composite} className={classes.composite_img} /> : null}
                                                    {column.items.map((item, index) => {
                                                        return (
                                                            <Draggable
                                                                key={item.id}
                                                                draggableId={item.id}
                                                                index={index}
                                                            >
                                                                {(provided, snapshot) => {
                                                                    return (
                                                                        <div
                                                                            ref={provided.innerRef}
                                                                            {...provided.draggableProps}
                                                                            {...provided.dragHandleProps}
                                                                            style={{
                                                                                userSelect: "none",
                                                                                padding: '.5rem 1rem',
                                                                                margin: "0 0 8px 0",
                                                                                minHeight: "50px",
                                                                                display: 'flex',
                                                                                alignItems: 'center',
                                                                                justifyContent: 'space-between',
                                                                                borderRadius: '0.5rem',
                                                                                boxShadow: '1px 3px 5px rgba(0,0,0,0.5)',
                                                                                backgroundColor: snapshot.isDragging
                                                                                    ? "#f2f3f4"
                                                                                    : "white",
                                                                                color: "#3d59ab",
                                                                                fontSize: '1.2rem',
                                                                                ...provided.draggableProps.style
                                                                            }}>
                                                                            <div style={{
                                                                                display: 'flex', alignItems: 'center',
                                                                                color: '#2774AE'
                                                                            }}>
                                                                                <PlayArrowIcon fontSize="default"
                                                                                    style={{ marginRight: '0.5rem', color: '#2774AE' }} />
                                                                                {item.content}
                                                                            </div>
                                                                            <img src={ArrowRight} style={{
                                                                                width: '30px',
                                                                                height: '20px'
                                                                            }} />
                                                                        </div>
                                                                    );
                                                                }}
                                                            </Draggable>
                                                        );
                                                    })}
                                                    {provided.placeholder}
                                                </div>
                                            );
                                        }}
                                    </Droppable>
                                </div>
                            </div>
                        )
                    })}
                </DragDropContext>
            </div>
        </ThemeProvider>
    );
}

export default Dragger;