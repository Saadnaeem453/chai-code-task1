import React, { useState } from "react";
import Course1 from "../../assets/Course1.png";
import Course2 from "../../assets/Course2.png";
import Dots from "../../assets/SideDOTS.svg";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import DropdownMenu from "./DropDownMenu";

interface Item {
    id: string;
    title: string;
    price: string;
    type: string;
    image: string;
}

const initialItems: Item[] = [
    {
        id: "1",
        title: "Interview preparation with JavaScript 2.0",
        price: "Rs. 9000/-",
        type: "Course",
        image: Course1
    },
    {
        id: "2",
        title: "Aptitude - Averages, Mixtures & Allegation",
        price: "Free",
        type: "Mock Test",
        image: Course2
    },
    {
        id: "3",
        title: "Aptitude - Simple & Compound Interest",
        price: "Free",
        type: "Mock Test",
        image: Course2
    },
    {
        id: "4",
        title: "Aptitude - Partnership",
        price: "Free",
        type: "Mock Test",
        image: Course2
    },
    {
        id: "5",
        title: "Aptitude - Time & Work",
        price: "Free",
        type: "Mock Test",
        image: Course2
    }
];

const DndCourses: React.FC = () => {
    const [items, setItems] = useState<Item[]>(initialItems);

    const handleOnDragEnd = (result: DropResult) => {
        if (!result.destination) return;

        const newItems = Array.from(items);
        const [reorderedItem] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, reorderedItem);

        setItems(newItems);
    };

    const moveToTop = (index: number) => {
        if (index > 0) {
            const newItems = [...items];
            const [movedItem] = newItems.splice(index, 1);
            newItems.unshift(movedItem);
            setItems(newItems);
        }
    };

    const moveToBottom = (index: number) => {
        if (index < items.length - 1) {
            const newItems = [...items];
            const [movedItem] = newItems.splice(index, 1);
            newItems.push(movedItem);
            setItems(newItems);
        }
    };

    const removeItem = (index: number) => {
        setItems(items.filter((_, i) => i !== index));
    };

    return (
        <div className="pl-0 pt-2 p-8 noselect">
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="items">
                    {(provided) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            className="items pl-0 pt-0 p-4 rounded-lg"
                        >
                            {items.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className="flex items-center mb-4 p-4 bg-white shadow-lg rounded-lg gap-5"
                                        >
                                            <div className="">
                                                <img
                                                    src={Dots}
                                                    alt={"dots"}
                                                    className="w-4 h-8"
                                                />
                                            </div>
                                            <div className="w-30 h-20 mr-4">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover rounded-lg"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                            </div>
                                            <p className="text-start mr-5 gap-3 font-medium text-lg">{item.price}</p>
                                            <div className="ml-auto text-black px-3 bg-[#DBFFCE] py-1 text-sm rounded-md border-0.5 border-gray-300">{item.type}</div>
                                            <DropdownMenu
                                                onMoveToTop={() => moveToTop(index)}
                                                onMoveToBottom={() => moveToBottom(index)}
                                                onRemove={() => removeItem(index)}
                                            />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
};

export default DndCourses;
