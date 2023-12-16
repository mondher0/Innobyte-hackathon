import RoomsContainer from "@/components/rooms/RoomsContainer";

const page = () => {
  // some rooms for testing
  const rooms = [
    {
      roomId: "room1",
      roomName: "room1",
      icon: "/room_1.png",
      logo: "",
      //   some testing tasks
      tasks: [
        {
          taskId: "task1",
          taskName: "task1",
          taskDescription: "task1",
          taskStatus: "task1",
          taskPriority: "task1",
          taskAssignee: "task1",
        },
        {
          taskId: "task2",
          taskName: "task2",
          taskDescription: "task2",
          taskStatus: "task2",
          taskPriority: "task2",
          taskAssignee: "task2",
        },
      ],
      //   some testing members
      members: [
        {
          memberId: "member1",
          memberName: "member1",
          memberRole: "member1",
          memberAvatar: "member1",
        },
        {
          memberId: "member2",
          memberName: "member2",
          memberRole: "member2",
          memberAvatar: "member2",
        },
      ],
    },
    {
      roomId: "room2",
      roomName: "room2",
      icon: "/room_2.png",
      logo: "",
      //   some testing tasks
      tasks: [
        {
          taskId: "task1",
          taskName: "task1",
          taskDescription: "task1",
          taskStatus: "task1",
          taskPriority: "task1",
          taskAssignee: "task1",
        },
        {
          taskId: "task2",
          taskName: "task2",
          taskDescription: "task2",
          taskStatus: "task2",
          taskPriority: "task2",
          taskAssignee: "task2",
        },
      ],
      //   some testing members
      members: [
        {
          memberId: "member1",
          memberName: "member1",
          memberRole: "member1",
          memberAvatar: "member1",
        },
        {
          memberId: "member2",
          memberName: "member2",
          memberRole: "member2",
          memberAvatar: "member2",
        },
      ],
    },
  ];
  return (
    <>
      <RoomsContainer rooms={rooms} />
    </>
  );
};
export default page;
