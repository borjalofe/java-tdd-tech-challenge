package dev.borjalofe.geardesk.challenges.s15.e23;

import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

class Exercise23Test {
  @Test
  void implementsConcern() {
    assertTrue(Exercise23.done(), "Implement: Borrower <= 2 overlapping kits");
  }
}
