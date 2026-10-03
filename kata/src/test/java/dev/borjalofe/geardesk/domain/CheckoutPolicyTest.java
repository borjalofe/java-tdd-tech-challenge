package dev.borjalofe.geardesk.domain;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.time.LocalDate;
import org.junit.jupiter.api.Test;

class CheckoutPolicyTest {
  @Test
  void endMustBeOnOrAfterStart() {
    LocalDate s = LocalDate.of(2026, 1, 1);
    assertTrue(CheckoutPolicy.endOnOrAfterStart(s, s));
    assertFalse(CheckoutPolicy.endOnOrAfterStart(s, s.minusDays(1)));
  }

  @Test
  void maxFourteenDays() {
    LocalDate s = LocalDate.of(2026, 1, 1);
    assertTrue(CheckoutPolicy.withinMaxDuration(s, s.plusDays(14)));
    assertFalse(CheckoutPolicy.withinMaxDuration(s, s.plusDays(15)));
  }
}
