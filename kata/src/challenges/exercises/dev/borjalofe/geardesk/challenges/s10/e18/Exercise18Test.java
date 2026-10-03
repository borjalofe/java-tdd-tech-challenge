package dev.borjalofe.geardesk.challenges.s10.e18;

import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

class Exercise18Test {
  @Test
  void implementsConcern() {
    assertTrue(Exercise18.done(), "Implement: Delete Borrower if no active checkouts");
  }
}
