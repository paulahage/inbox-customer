import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { receiveTicket } from "../../redux/reducers/ticket";
import { SocialMedia, Ticket, TicketStatus } from "../../apiModels";

import "./TicketList.scss";

export function TicketList() {
  // The `state` arg is correctly typed as `RootState` already
  const tickets = useAppSelector((state) => state.ticket.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      receiveTicket({
        customer: {
          id: "",
          name: "",
          socialMediaAccount: {
            id: "",
            picture: "",
            socialMedia: SocialMedia.TWITTER,
          },
        },
        date: "",
        events: [],
        id: "werewre",
        status: TicketStatus.ASSIGNED,
      })
    );
  }, []);

  return (
    <div className="ticketList">
      Tickets ({tickets.length}):
      {tickets.map((ticket: Ticket) => (
        <div className="ticketList__ticket"> Ticket {ticket.id} </div>
      ))}
    </div>
  );
}
