package dev.borjalofe.geardesk.domain;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

/** Pure checkout date rules (reference). Parse stays elsewhere. */
public final class CheckoutPolicy {
  public static final int MAX_DAYS = 14;

  private CheckoutPolicy() {}

  public static boolean endOnOrAfterStart(LocalDate start, LocalDate end) {
    return !end.isBefore(start);
  }

  public static boolean withinMaxDuration(LocalDate start, LocalDate end) {
    long days = ChronoUnit.DAYS.between(start, end);
    return days <= MAX_DAYS;
  }
}
